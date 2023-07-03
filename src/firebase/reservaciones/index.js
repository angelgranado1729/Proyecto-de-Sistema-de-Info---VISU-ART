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

    const reserveData = {
      id: docRef.id,
      tour_id: data.tour_id,
      fecha: data.fecha,
    }

    user.reservations.push(reserveData)

    const tempData = {
      email: user.email,
      favoriteTours: user.favoriteTours,
      uid: user.id,
      name: user.name,
      photoURL: user.photoURL,
      provider: user.provider,
      reservations: user.reservations,
      type: user.type,
    }
    await createUser(tempData);

  }