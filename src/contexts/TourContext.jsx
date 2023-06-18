import react, { useContext, createContext, useEffect, useState } from "react";

export const TourContext = createContext(null);

export function TourContextProvider({ children }) {
    const [tour, setTour] = useState(null);
    const [tourId, setTourId] = useState(null);

    useEffect(() => {}, 
    [tourId])

    return <TourContext.Provider value={{tour,}}>{children}</TourContext.Provider>
}

export function userTour() {
    return useContext(TourContext)
}