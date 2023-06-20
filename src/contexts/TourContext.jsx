import react, { useContext, createContext, useEffect, useState } from "react";
import { fetchTour } from "../firebase/tours";

export const TourContext = createContext(null);

export function TourContextProvider({ children }) {
    const [tour, setTour] = useState(null);
    const [tourId, setTourId] = useState({
        id: null,
    });

    useEffect(() => {
        fetchTour(tourId.id);
    }, [tourId])

    const changeId = (newId) => {
        setTourId(newId);
    }

    return <TourContext.Provider value={{tour, tourId, changeId}}>{children}</TourContext.Provider>
}

export function useTour() {
    return useContext(TourContext)
}