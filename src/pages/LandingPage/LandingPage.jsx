import React, { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Card from "../../components/Card/Card";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Navbar from "../../components/NavBar/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
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


  {/*Feedback*/}
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  const handleReviewClick = () => {
    setShowFeedback(true);
    navigate("/feedback");
  };

  const Feedback = () => {
    return (
      <div>
        <h1>Página de Feedback</h1>
        {/* Contenido de la página de feedback */}
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="tours-section">
        <Title
          title="Tours Disponibles"
          description="En esta sección podrás encontrar los tours que se ofrecen para conocer las diferentes obras de arte que se encuentran en la Universidad Metropolitana. Nuestros recorridos se realizan por los distintos salones y exposiciones disponibles en nuestra casa de estudios, por lo que sientasé libre de disfrutar de estos eventos y conozca más de nuestra gran variedad de representaciones artísticas de múltiples pintores y escultores."
        />
        <div className="landing-decoration1"></div>
        <div className="search-container">
          <div className="search-bar">
            <DropdownMenu className="dropdownNew" />
            <input type="text" placeholder="Ingresa tu búsqueda" />
            <button className="search-btn">Buscar</button>
          </div>
        </div>
        <div className="cards-container">
          <div className="landing-decoration2"></div>
          <div className="landing-decoration3"></div>
          <div className="landing-decoration4"></div>
          <div className="landing-decoration5"></div>
        {tours.map((tour) => (
          <h1> {tour.nombre}</h1>
        ))}
          <Card/>
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="info-section">
        <Title title="Información relevante" />
        <Information />
      </section>

      <section className="reviews-section">
        <div className="reviews">
          <Subtitle subtitle="Comparte tu experiencia:" />
          <Reviews />
          <button className="orange-btn" onClick={handleReviewClick}>
            Hacer reseña
          </button>
        </div>
      </section>

      {showFeedback && <Feedback />}
    </div>
  );
};

export default LandingPage;
