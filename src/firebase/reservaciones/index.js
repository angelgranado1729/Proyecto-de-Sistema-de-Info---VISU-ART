import {
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
    setDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "../firebase-config";

  export const RESERVES_COLLECTION = "Reservas";

  export async function createReserve(data, user) {
    const docRef = await addDoc(collection(db, RESERVES_COLLECTION), data)
    console.log(docRef.id)
  }