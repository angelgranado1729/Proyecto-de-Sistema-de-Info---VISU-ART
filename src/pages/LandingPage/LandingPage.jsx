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
import { collection, query, where, updateDoc, doc, getDocs } from "firebase/firestore";
import "./LandingPage.css";

const LandingPage = () => {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");
  const enableInput = document.getElementById('enableInput');
  const decoration2 = document.getElementById('decoration2');
  const decoration3 = document.getElementById('decoration3');
  const decoration4 = document.getElementById('decoration4');
  const decoration5 = document.getElementById('decoration5');
  const decoration6 = document.getElementById('decoration6');
  const decoration7 = document.getElementById('decoration7');
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const toursCollection = collection(db, "Tours");
        const toursSnapshot = await getDocs(toursCollection);
        const toursData = toursSnapshot.docs.map((doc) => doc.data());
        setTours(toursData);
        console.log(toursData);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  {/*Busqueda por filtro*/ }
  const finder = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      decoration2.style.visibility = "visible";
      decoration3.style.visibility = "visible";
      decoration4.style.visibility = "visible";
      decoration5.style.visibility = "visible";
      decoration6.style.visibility = "visible";
      decoration7.style.visibility = "visible";
    } else {
      decoration2.style.visibility = "hidden";
      decoration3.style.visibility = "hidden";
      decoration4.style.visibility = "hidden";
      decoration5.style.visibility = "hidden";
      decoration6.style.visibility = "hidden";
      decoration7.style.visibility = "hidden";
    }
  }
  const applyFilter = (e) => {
    if (e.target.value === "Filtrar por") {
      enableInput.disabled = true;
    }
    if (e.target.value === "nombre") {
      setSearchFilter("nombre");
      enableInput.disabled = false;
    }
    if (e.target.value === "ubicacion") {
      setSearchFilter(e.target.value);
      enableInput.disabled = false;
    }
  }
  const results = !search ? tours : tours.filter((tour) =>
    searchFilter === "nombre"
      ? tour.nombre.toLowerCase().includes(search.toLowerCase())
      : tour.ubicacion.toLowerCase().includes(search.toLowerCase())
  );
  function checkResults() {
    if (results.length === 0) {
      return (
        <div className="noresults-container">
          <h1 className="cards-noresults">No hay resultados!</h1>
        </div>
      )
    }
  }

  {/*Feedback*/ }
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
          description="En esta sección podrás encontrar los tours que se ofrecen para 
          conocer las diferentes obras de arte que se encuentran en la Universidad 
          Metropolitana. Nuestros recorridos se realizan por los distintos salones y
           exposiciones disponibles en nuestra casa de estudios, por lo que sientasé 
           libre de disfrutar de estos eventos y conozca más de nuestra gran variedad 
           de representaciones artísticas de múltiples pintores y escultores."
        />

        <div className="landing-decoration1"></div>
        <div className="search-container">
          <div className="search-bar">
            <select onChange={applyFilter} className="dropdownM-container">
              <option value="Filtrar por">Filtrar por:</option>
              <option type="text" value="nombre">Nombre</option>
              <option type="text" value="ubicacion">Ubicación</option>
            </select>
            <input disabled value={search} id="enableInput" onChange={finder} type="text" placeholder="Ingresa tu búsqueda" />
          </div>
        </div>
        <div className="cards-container">
          <div id="decoration2" className="landing-decoration2"></div>
          <div id="decoration3" className="landing-decoration3"></div>
          <div id="decoration4" className="landing-decoration4"></div>
          <div id="decoration5" className="landing-decoration5"></div>
          <div id="decoration6" className="landing-decoration6"></div>
          <div id="decoration7" className="landing-decoration7"></div>
          {checkResults()}
          {results.map((tour) => (
            <Card
              key={tour.id}
              tourTitle={tour.nombre}
              tourDescription={tour.resumen}
              tourImage={tour.imagen}
              tourLocation={tour.ubicacion}
            />
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