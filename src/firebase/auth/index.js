import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase-config";
import { createUser } from "../users";
import { LOGIN_URL } from "../../constants/urls";

const BASE_URL = "http://localhost:5173";

// HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
export const signInWithGoogle = async ({ onSuccess, onFail }) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    console.log(result);

    if (isNewUser) {
      const { uid, email, displayName, photoURL } = result.user;
      const userFields = {
        uid,
        email,
        name: displayName,
        favoriteTours: [],
        reservations: [],
        type: "user",
        provider: "google",
        photoURL: photoURL,
      };

      await createUser(userFields);
    }

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const errorCode = error?.code;
    const errorMessage = error?.message;
    // The email of the user's account used.
    const email = error?.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    if (onFail) {
      onFail();
      console.error("SIGN IN WITH GOOGLE FAILED", { error });
    }

    console.error("FAILED SIGN IN WITH GOOGLE", {
      errorCode,
      errorMessage,
      email,
      credential,
    });
  }
};

//HANDLE FACEBOOK LOGIN
export const signInWithFacebook = async ({ onSuccess, onFail }) => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    console.log(result);

    if (isNewUser) {
      const { uid, email, displayName, photoURL } = result.user;
      await createUser({
        uid,
        email,
        name: displayName,
        favoriteTours: [],
        reservations: [],
        type: "user",
        provider: "facebook",
        photoURL: photoURL,
      });
    }

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const errorCode = error?.code;
    const errorMessage = error?.message;
    // The email of the user's account used.
    const email = error?.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    if (onFail) {
      onFail();
      console.error("SIGN IN WITH FACEBOOK FAILED", { error });
    }

    console.error("FAILED SIGN IN WITH FACEBOOK", {
      errorCode,
      errorMessage,
      email,
      credential,
    });
  }
};

// HANDLE REGISTER WITH EMAIL AND PASSWORD
export const registerWithEmailAndPassword = async ({
  userData,
  onSuccess,
  onFail,
}) => {
  try {
    const { email, password, birthday, gender, ...restData } = userData;
    const firebaseResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await createUser({
      ...restData,
      uid: firebaseResult.user.uid,
      email,
      name: restData.name,
      favoriteTours: [],
      reservations: [],
      type: "user",
      provider: "email",
      birthdayUser: birthday,
      genderUser: gender,
      photoURL: "",
    });

    // SUCCESS CALLBACK
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error("REGISTER FAILED", { error });
    if (onFail) {
      onFail();
    }
  }
};

// HANDLE LOGIN WITH EMAIL AND PASSWORD
export const loginWithEmailAndPassword = async ({
  userData,
  onSuccess,
  onFail,
}) => {
  try {
    const { email, password } = userData;
    await signInWithEmailAndPassword(auth, email, password);

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error("LOGIN FAILED", { error });

    if (onFail) {
      onFail();
    }
  }
};

// HANDLE PASSWORD RESET
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email, {
    url: `${BASE_URL}${LOGIN_URL}`,
  });
}

// HANDLE PASSWORD RESET
export function resetPassword(oobCode, newPassword) {
  return confirmPasswordReset(auth, oobCode, newPassword);
}

// HANDLE USER SIGN OUT
export const logout = async (callback) => {
  try {
    await signOut(auth);

    if (callback) {
      callback();
    }
  } catch (error) {
    console.error("SIGN OUT FAILED", { error });
  }
};
