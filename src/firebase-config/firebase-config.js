// COnfiguración de Firebase para la aplicación

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIugAdflCiFftbQIVAHp1gBuuk3q5uTC0",
  authDomain: "visuart-17959.firebaseapp.com",
  projectId: "visuart-17959",
  storageBucket: "visuart-17959.appspot.com",
  messagingSenderId: "116309438163",
  appId: "1:116309438163:web:b68dcdae45b77b073eee26",
  measurementId: "G-FH6HFY195G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);