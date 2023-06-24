import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import "./DropdownMenu.css";
import { getDocs, collection } from "firebase/firestore";

const FeedbackDropdownMenu = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const toursCollection = collection(db, "Tours");
        const toursSnapshot = await getDocs(toursCollection);
        const toursData = toursSnapshot.docs.map((doc) => doc.data());
        setTours(toursData);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="dropdownNew">
      <select className="dropbtnNew">
        <option value="">Filtrar por:</option>
        {tours.map((tour) => (
          <option key={tour.id} value={tour.nombre}>
            {tour.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeedbackDropdownMenu;
