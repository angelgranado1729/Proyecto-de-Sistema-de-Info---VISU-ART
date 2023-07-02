import { useEffect } from "react";
import { useTourList } from "../../hooks/useTourList";
import { Loading } from "../../components/Loading/Loading";



export function TourPage() {

    const {
        tourList,
        listLoading,
        getTourList
    } = useTourList();

    useEffect(() => {
        getTourList();
        console.log(tourList);
    }, []);


    if (listLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="container">



        </div>
    )


}