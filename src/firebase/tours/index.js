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

export async function fetchTour(tourID) {
    if (tourID){
        const docRef = doc(db, "Tours", tourID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log('documento no encontrado')
        }
    }

    else{
        console.log('hola')
    }
}