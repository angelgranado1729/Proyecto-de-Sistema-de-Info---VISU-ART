// COnfiguración de Firebase para la aplicación

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.REACT_APP_APIKEY}`,
  authDomain: `${import.meta.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${import.meta.env.REACT_APP_PROJECTID}`,
  storageBucket: `${import.meta.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${import.meta.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${import.meta.env.REACT_APP_APPID}`
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);