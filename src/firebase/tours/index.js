import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useGetTour } from "../../hooks/useGetTour";

/*Funciones sobre la coleccion de tours en firebase*/


/***  Funcion de obtener listado de tours, 
 *    retorna un array con el listado de tours
 * ***/
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


/***Funcion de obtener un tour en especifico de la coleccion,
 *  El If se ejecutara si existe el tour en la base de datos,
 *  de lo contrario se ejecutara el else, que normalmente no
 * se deberia ejecutar a menos que incluyamos una funcion de busqueda
 * con input del usuario    
 */
export async function fetchTour(tourID) {
    if (tourID){
        const docRef = doc(db, "Tours", tourID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            return docSnap.data();
        } else {
            console.log('documento no encontrado')
        }
    }

    else{
        console.log('hola')
    }
}
