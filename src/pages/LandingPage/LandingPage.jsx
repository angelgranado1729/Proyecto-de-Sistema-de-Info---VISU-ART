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
import { db } from "../../firebase/firebase-config";
import { collection, query, where, updateDoc, doc, getDocs} from "firebase/firestore"; 
import "./LandingPage.css";

const LandingPage = () => {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const toursCollection = collection(db, "Tours");
        const toursSnapshot = await getDocs(toursCollection);
        const toursData = toursSnapshot.docs.map((doc) => doc.data());
        setTours(toursData);
        console.log(tours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
  
    fetchTours();
  }, []);

  {/*Busqueda por filtro*/}
  const finder = (e) => {
    setSearch(e.target.value);
  }


  /*Busqueda por nombre*/
  const results = !search ? tours : tours.filter((tour) =>
  tour.nombre.toLowerCase().includes(search.toLowerCase()))

  /*Busqueda por ubicacion
  const results = !search ? tours : tours.filter((tour) =>
  tour.ubicacion.toLowerCase().includes(search.toLowerCase()))*/


  function checkResults(){
    if(results.length === 0){
      return(
        <div className="noresults-container">
        <h1 className="cards-noresults">No hay resultados!</h1>
        </div>
      )
    }
  }

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
            <input value={search} onChange={finder} type="text" placeholder="Ingresa tu búsqueda" />
            <button className="search-btn">Buscar</button>
          </div>
        </div>
        <div className="cards-container">
          <div className="landing-decoration2"></div>
          <div className="landing-decoration3"></div>
          <div className="landing-decoration4"></div>
          <div className="landing-decoration5"></div>
          <div className="landing-decoration6"></div>
          <div className="landing-decoration7"></div>
          {checkResults()}
          {results.map((tour) => (
            <Card tourTitle={tour.nombre} tourDescription={tour.resumen} tourImage={tour.imagen} tourLocation={tour.ubicacion}/>
          ))}
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
