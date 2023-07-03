import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export async function fetchFeedback() {
  const querySnapshot = await getDocs(collection(db, "Feedback"));
  const list = [];
  querySnapshot.forEach((doc) => {
    list.push({
      data: doc.data(),
      id: doc.id,
    });
  });
  return list;
}
