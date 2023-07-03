import { useState } from "react";
import Title from "../../components/Title/Title";
import "./MisionPage.css"
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/urls";


const MisionPage = () => {
    return (
        <div className="App">
            <header className="back-header">
                <Link to={HOME_URL}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </header>


            <Title title="Misión" />
            <div className="text-container">
                <div className="info-container">
                    <p>Nuestra misión en VisuArt es democratizar el acceso al arte y la cultura en la Universidad Metropolitana. Creemos que cada estudiante, profesor y visitante debe tener la oportunidad de explorar y apreciar las diversas obras de arte que adornan nuestro campus. A través de nuestra plataforma, nos esforzamos por proporcionar una experiencia de tour de arte enriquecedora y accesible que eduque, inspire y conecte a las personas con el arte. Al hacerlo, esperamos fomentar una mayor apreciación y entendimiento del arte y su papel en la sociedad.</p>
                </div>
                <div className="info-container">
                    <p>Además, en VisuArt, nos comprometemos a proporcionar una plataforma que no solo facilite el acceso al arte, sino que también promueva la educación y el aprecio por las diversas formas de expresión artística. Reconocemos que cada obra de arte tiene una historia que contar, y nos esforzamos por proporcionar a nuestros usuarios las herramientas y la información necesarias para descubrir y entender estas historias. Al hacerlo, esperamos inspirar a nuestros usuarios a desarrollar su propio amor y aprecio por el arte, y a reconocer el valor y la importancia del arte en nuestra sociedad y en nuestras vidas cotidianas.</p>
                </div>
            </div>

        </div>
    )
}

export default MisionPage