import { useState } from "react";
import { fetchTourList } from "../firebase/tours";

export function useTourList(){
    const [tourList, setTourList] = useState();
    const [listLoading, setlistLoading] = useState(false);


    const getTourList = async () => {
        setlistLoading(true);
        const listResult = await fetchTourList();
        setTourList(listResult)
        setlistLoading(false);
    }

    return {
        tourList,
        listLoading,
        getTourList,
    }
}