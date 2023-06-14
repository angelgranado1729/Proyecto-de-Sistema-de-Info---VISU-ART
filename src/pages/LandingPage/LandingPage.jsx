import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Information from "../../components/Information/Information";


const LandingPage = () => {
    return (
        <div className="App">
        <Hero/>
        <section className="tours-section">
          <Title title="Tours disponibles" description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam placeat sint consequuntur officiis alias dolore. Numquam debitis vel amet odio unde vitae velit repellendus. Porro adipisci enim eveniet laborum mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam repudiandae provident architecto nihil consequuntur a cumque cupiditate ad. Corporis veniam rerum velit pariatur porro qui eos quasi suscipit eius?"/>
          <div className="cards-container">
            <Card/>
            <Card/>
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
      </div>
    )
}

export default LandingPage