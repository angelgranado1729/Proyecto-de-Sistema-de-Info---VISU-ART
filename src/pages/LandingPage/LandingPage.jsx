import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Card from "../../components/Card/Card";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Navbar from "../../components/NavBar/Navbar";
import "./LandingPage.css"


const LandingPage = () => {
    return (
        <div className="App">
        <Navbar/>
        <Hero/>
        <section className="tours-section">
          <Title title="Tours disponibles" description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam placeat sint consequuntur officiis alias dolore. Numquam debitis vel amet odio unde vitae velit repellendus. Porro adipisci enim eveniet laborum mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam repudiandae provident architecto nihil consequuntur a cumque cupiditate ad. Corporis veniam rerum velit pariatur porro qui eos quasi suscipit eius?"/>
          <div className="landing-decoration1"></div>
          <div className="search-container">
            <div className="search-bar">
            <DropdownMenu className="dropdownNew" />

              <input type="text" placeholder="Ingresa tu búsqueda"/>
              <button className="search-btn">Buscar</button>
            </div>
          </div>
          <div className="cards-container">
          <div className="landing-decoration2"></div>
          <div className="landing-decoration3"></div>
          <div className="landing-decoration4"></div>
          <div className="landing-decoration5"></div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
  
        <section className="info-section">
          <Title title="Información relevante"/>
          <Information/>
        </section>

        <section className="reviews-section">
          <div className="reviews">
            <Subtitle subtitle = "Comparte tu experiencia:"/>
            <Reviews/>
            <button className="orange-btn">Hacer reseña</button>
          </div>
        </section>
      </div>
    )
}

export default LandingPage