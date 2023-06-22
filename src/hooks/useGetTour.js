import { useState } from "react";
import { fetchTour } from "../firebase/tours";

/*Hook para obtener un tour en espeficico de la base de datos*/
export function useGetTour(){
    const [tourItem, setTourItem] = useState();
    const [tourLoading, setTourLoading] = useState(false);


    const getTour = async () => {
        setTourLoading(true);
        const tourResult = await fetchTour();
        setTourItem(tourResult);
        setTourLoading(false);
    }

    return {
        tourItem,
        tourLoading,
        getTour,
    }
}