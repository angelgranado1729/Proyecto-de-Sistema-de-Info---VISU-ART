// Componente para filtrar los feedbacks por tour.

import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import "./DropdownMenu.css";
import { getDocs, collection } from "firebase/firestore";

const FeedbackDropdownMenu = ({ setSelectedTour }) => {
  const [tours, setTours] = useState([]);

  // Obtencion de tours desde Firebase para posterior llenado del dropdown menu con sus nombres. 
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
      <select className="feedbackdropdownM-container" onChange={(e) => setSelectedTour(e.target.value)}>
      <option value="">Seleccionar Tour:</option>
      {tours.map((tour) => (
        <option key={tour.id} value={tour.nombre}>
          {tour.nombre}
        </option>
      ))}
    </select>
  );
};

export default FeedbackDropdownMenu;