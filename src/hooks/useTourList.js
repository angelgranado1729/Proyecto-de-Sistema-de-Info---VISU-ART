import { useState } from "react";
import { fetchTourList } from "../firebase/tours";

export function useTourList() {
  const [tourList, setTourList] = useState();
  const [listLoading, setlistLoading] = useState(false);
  const [tourByName, setTourByName] = useState();

  const getTourList = async () => {
    setlistLoading(true);
    const listResult = await fetchTourList();
    setTourList(listResult);
    setlistLoading(false);
  };

  const getTourByName = async (tour_name) => {
    setlistLoading(true);
    const listResult = await fetchTourList();
    const tour = listResult.find((tour) => tour.data.nombre === tour_name);
    setTourByName(tour);
    setlistLoading(false);
  };

  return {
    tourList,
    listLoading,
    tourByName,
    getTourList,
    getTourByName,
  };
}
