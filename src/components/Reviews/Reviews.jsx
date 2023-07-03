// Componente para mostrar los feedbacks de la BD 

import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const Reviews = () => {
  const [feedbacksData, setFeedbacksData] = useState([]);  // Estado para almacenar los datos de los feedbacks
  const [index, setIndex] = useState(0); // Estado para controlar el índice del slide
  const [autoPlay, setAutoPlay] = useState(true); // Estado para controlar el autoplay

  // Obtencion de los feedbacks desde Firebase  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbacksCollectionRef = collection(db, "Feedback");
        const feedbacksQuery = query(feedbacksCollectionRef);

        const unsubscribe = onSnapshot(feedbacksQuery, (snapshot) => {
          const feedbacksArray = snapshot.docs[0].data().feedback;
          setFeedbacksData(feedbacksArray);
        });

        return () => unsubscribe();
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  // Autoplay
  useEffect(() => {
    let intervalId;

    if (autoPlay) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === feedbacksData.length - 1 ? 0 : prevIndex + 1));
      }, 6000); // Cambia el slide cada 3 segundos (ajusta este valor según tus necesidades)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay, feedbacksData.length]);

  // Controla que el índice no sea mayor que la cantidad de elementos del array
  useEffect(() => {
    if (index === feedbacksData.length) {
      setIndex(0); // Vuelve al inicio cuando se muestra el último elemento
    }
  }, [index, feedbacksData.length]);

  // Funciones para controlar el slide
  const handlePreviousSlide = () => {
    if (index === 0) {
      setIndex(feedbacksData.length - 1);
    } else {
      setIndex(index - 1);
    }
    setAutoPlay(false);
  };

  const handleNextSlide = () => {
    if (index === feedbacksData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setAutoPlay(false);
  };

  const handleToggleAutoPlay = () => {
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };
  
  // HTML 
  return (
    <div className="reviews-section">
      <div className="reviews-decoration1"></div>
      <div className="reviews-decoration2"></div>
      <div className="reviews-container">
        {feedbacksData.map((item, indexUser) => {
          const { opinion, rating, tour, name } = item;
          let position = "nextSlide";
          if (indexUser === index) {
            position = "activeSlide";
          }
          if (indexUser === index - 1 || (index === 0 && indexUser === feedbacksData.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article className={`review-slide ${position}`} key={indexUser}>
              <div className="review">
                <p className="review-quote">{opinion}</p>
                <div className="review-rating">
                  {Array.from({ length: rating }, (_, i) => (
                    <FaStar color="#ffc107" key={i} />
                  ))}
                  {Array.from({ length: 5 - rating }, (_, i) => (
                    <FaStar color="#e4e5e9" key={i} />
                  ))}
                </div>
              </div>
              <div className="bubble-decoration"></div>
              <div className="review-userinfo">
                <h4 className="review-username">{name}</h4>
                <p className="review-username">Usuario anonimo</p>
                <p className="tour-name">Sobre {tour}</p>
              </div>
            </article>
          );
        })}
        
        <div className="container">
        <div className="reviews-navegation">
          <button className="prev" onClick={handlePreviousSlide}>
            <i style={{color: "white"}} className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleNextSlide}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Reviews;