import { useState } from "react";
import Title from "../../components/Title/Title";
import "../MisionPage/MisionPage.css"
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/urls";


const VisionPage = () => {
    return (
        <div className="App">
            <header className="back-header">
                <Link to={HOME_URL}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </header>
            <Title title="Visión" />
            <div className="text-container">
                <div className="info-container">
                    <p>Nuestra visión es ser la plataforma líder para la exploración y reserva de tours de arte en la Universidad Metropolitana. Aspiramos a fomentar una comunidad de amantes del arte que aprecien y participen activamente en la vida cultural de nuestro campus. En el futuro, esperamos expandir nuestra plataforma para incluir tours de arte y culturales en universidades y instituciones en todo el país. Al hacerlo, esperamos contribuir a la creación de una sociedad más educada y culturalmente rica. Además, aspiramos a ser más que solo una plataforma de tours de arte. En el futuro, esperamos expandir nuestras ofertas para incluir recursos educativos, foros de discusión y otras características que fomenten el aprendizaje y la discusión sobre el arte. Al hacerlo, esperamos fomentar una comunidad de amantes del arte que no solo aprecien el arte, sino que también comprendan su contexto y significado. A través de la educación y el diálogo, esperamos promover una mayor comprensión y apreciación del arte en nuestra sociedad.</p>
                </div>
                <div className="info-container">
                    <p>En VisuArt, vemos un futuro en el que el arte y la cultura son accesibles para todos, independientemente de su ubicación o antecedentes. Visualizamos nuestra plataforma como un puente que conecta a las personas con las ricas colecciones de arte de la Universidad Metropolitana, permitiéndoles descubrir y apreciar las obras de arte desde la comodidad de sus hogares o en el campus. A través de nuestra plataforma, esperamos inspirar a las personas a explorar y apreciar el arte, y a reconocer su valor y significado en nuestras vidas y en la sociedad en general.</p>
                </div>
            </div>

        </div>
    )
}

export default VisionPage