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
import { createUser } from "../users";

  export const RESERVES_COLLECTION = "Reservas";

  export async function createReserve(data, user) {
    const docRef = await addDoc(collection(db, RESERVES_COLLECTION), data)
    user.reservations.push(docRef.id)
    const tempData = {
      email: user.email,
      favoriteTours: user.favoriteTours,
      uid: user.id,
      name: user.name,
      photoUrl: user.photoURL,
      provider: user.provider,
      reservations: user.reservations,
      type: user.type,
    }
    await createUser(tempData);

  }