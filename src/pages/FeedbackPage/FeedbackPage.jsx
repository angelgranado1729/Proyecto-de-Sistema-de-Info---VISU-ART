//Página de Feedback de los tours
// En esta página, el usuario podrá dejar su opinión y calificación sobre los tours que haya realizado.

import React, { useState } from "react";
import { db } from "../../firebase/firebase-config";
import FeedbackDropdownMenu from "../../components/DropdownMenu/FeedbackDropdownMenu";
import Rating from "../../components/Rating/Rating";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./FeedbackPage.css";
import { collection, query, where, updateDoc, doc, getDocs,getDoc,addDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

const FeedbackPage = () => {
  
  const [ratingValues, setRatingValues] = useState(0);
  const [selectedTour, setSelectedTour] = useState("");
  const [opinion, setOpinion] = useState("");
  const navigate = useNavigate();
  
  // Manejo para actualizar las constantes de ratingValues, selectedTour y opinion
  const handleRatingChange = (value) => {
    setRatingValues(value);
  };

  // Variable para limitar la cantidad de caracteres en el campo de opinion
  const maxOpinioLength = 440;


  const handleOpinionChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxOpinioLength) {
      setOpinion(value);
    }
  };

  const handleFormSubmit = async () => {
    if (selectedTour === "") {
      alert("Por favor, seleccione un tour");
      return;
    }
    if(ratingValues === 0) {
        alert("Por favor, seleccione una calificación");
        return;
    }

    let feedbackData = { rating: ratingValues, opinion, tour: selectedTour };
    // Comunicacion con Firebase para actualizacion de la BD con el nuevo feedback
    const toursCollectionRef = collection(db, "Tours");
    const q = query(toursCollectionRef, where("nombre", "==", selectedTour));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No se encontró el tour");
      return;
    }

    const tourDoc = querySnapshot.docs[0];
    const tourRef = doc(db, "Tours", tourDoc.id);

    const existingFeedback = tourDoc.data().feedback || []; // Verificar si existe y es un array
    const newFeedback = { rating: ratingValues, opinion };

    try {
      await updateDoc(tourRef, {
        feedback: [...existingFeedback, newFeedback],
      });


      const feedbackCollectionRef = collection(db, "Feedback");
      const feedbackQuerySnapshot = await getDocs(feedbackCollectionRef);
  
      if (feedbackQuerySnapshot.empty) {
        // No hay documentos en la colección "Feedback", crear uno nuevo
        await addDoc(feedbackCollectionRef, { feedback: [feedbackData] });
      } else {
        // Hay documentos en la colección "Feedback", actualizar el primer documento
        const feedbackDocRef = feedbackQuerySnapshot.docs[0].ref;
        const feedbackDoc = await getDoc(feedbackDocRef);
        const existingFeedbackData = feedbackDoc.data().feedback || [];
        
        await updateDoc(feedbackDocRef, {
          feedback: [...existingFeedbackData, feedbackData],
        });
      }

      alert("Enviado Correctamente. \n¡Muchas Gracias por tu feedback!");
      navigate("/");
    } catch (error) {
      console.error("Ups, lo sentimos.\nError al enviar el feedback:", error);
    }
  };

  // HTML  
  return (
    <div className="App">
      <header className="back-header" onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </header>
      <div className="feedback-section">
        <Subtitle subtitle="¡Queremos escucharte!" />
        <p>Cuéntanos sobre tu experiencia en los tours</p>
        <div className="feedback-container">
          <div className="feedback-menu">
            <label htmlFor="">¿Sobre qué tour nos quieres contar?</label>
            <FeedbackDropdownMenu setSelectedTour={setSelectedTour} />
          </div>
          <div className="rating-menu">
            <p>Puntaje: </p>
            <Rating onRatingChange={handleRatingChange} />
          </div>
          <div className="feedback-decoration1"></div>
          <div className="feedback-decoration2"></div>
          <input
          type="text"
          className="input-feedback"
          placeholder="Añade tus opiniones"
          value={opinion}
          onChange={handleOpinionChange}
          maxLength={maxOpinioLength}
        />
        </div>
        <button className="blue-btn" onClick={handleFormSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;