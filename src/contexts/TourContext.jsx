import react, { useContext, createContext, useEffect, useState } from "react";
import { fetchTour } from "../firebase/tours";

export const TourContext = createContext(null);

export function TourContextProvider({ children }) {
    const [tour, setTour] = useState(null);
    const [tourId, setTourId] = useState({
        id: null,
    });

    /*Use effect quizas se elimine, por ahora ID y tour cambian independientemente*/
    useEffect(() => {
        if(tourId.id){
/*          Funcion sin implementar
            const tempTour = fetchTour(tourId.id);
            console.log(tempTour)
            setTour({
                id: tempTour.id,
                fecha: tempTour.fecha,
                user: '',
            });*/
            console.log('temporal')

        }else{
            setTour(null)
        }

    }, [tourId])


    /* Funcion para modificar el ID del context en componentes o vistas*/
    const changeId = (newId) => {
        setTourId(newId);
    }

    /* Funcion para modificar el tour (datos de reserva) en componentes o vistas*/
    const changeTour = (newTour, newId) => {
        setTour({
            id: newId,
            fecha: newTour.fecha,
            user: '',
        })
    }

    return <TourContext.Provider value={{tour, tourId, changeId, changeTour}}>{children}</TourContext.Provider>
}

export function useTour() {
    return useContext(TourContext)
}