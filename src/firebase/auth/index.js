import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
  updatePassword,

} from "firebase/auth";
import { auth, googleProvider } from "../firebase-config";
import { createUser } from "../users";

// HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
export const signInWithGoogle = async ({ onSuccess, onFail }) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      const { uid, email, displayName } = result.user;
      await createUser({
        uid,
        email,
        name: displayName,
        age: "",
        favoriteTours: [],
        reservations: [],
        type: "user",
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

// HANDLE REGISTER WITH EMAIL AND PASSWORD
export const registerWithEmailAndPassword = async ({
  userData,
  onSuccess,
  onFail,
}) => {
  try {
    const { email, password, ...restData } = userData;
    const firebaseResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await createUser({
      ...restData,
      email,
      uid: firebaseResult.user.uid,
      favoriteTours: [],
      reservations: [],
      type: "user",
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


// HANDLE PASSWORD UPDATE
export const updateUserPassword = async ({ newPassword, onSuccess, onFail }) => {
  try {
    const user = auth.currentUser;
    if (user) {
      await updatePassword(user, newPassword);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      throw new Error("No user is currently logged in.");
    }
  } catch (error) {
    console.error("PASSWORD UPDATE FAILED", { error });
    if (onFail) {
      onFail();
    }
  }
};