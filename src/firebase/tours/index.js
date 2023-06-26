import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export async function fetchTourList() {
    const querySnapshot = await getDocs(collection(db, "Tours"));
    let tourList = [];
    querySnapshot.forEach((doc) => {
        tourList.push({
            data: doc.data(),
            id: doc.id,
        });
    })
    return tourList;
}