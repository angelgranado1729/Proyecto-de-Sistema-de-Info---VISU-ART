import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "../MisionPage/MisionPage.css"
import { HOME_URL } from "../../constants/urls";


const ObjectivesPage = () => {
    return (
        <div className="App">
            <header className="back-header">
                <Link to={HOME_URL}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </header>
            <Title title="Objetivos" />
            <div className="text-container">
                <div className="info-container">
                    <p> En VisuArt, nuestros objetivos están guiados por nuestra misión y visión. Buscamos crear una plataforma que sea accesible, educativa, comunitaria, innovadora y expansiva. Nuestro objetivo principal es proporcionar a nuestros usuarios una experiencia de tour de arte enriquecedora y accesible que les permita explorar y apreciar las diversas obras de arte en el campus de la Universidad Metropolitana. Al mismo tiempo, nos esforzamos por fomentar una comunidad de amantes del arte que participen activamente en la exploración y apreciación del arte. A través de la innovación y la expansión, esperamos llevar nuestra plataforma a un público más amplio y hacer una contribución significativa a la promoción del arte y la cultura. <br></br>Además, en VisuArt, nos comprometemos a mejorar continuamente nuestra plataforma para satisfacer las necesidades de nuestros usuarios. Reconocemos que el mundo del arte y la tecnología está en constante evolución, y nos esforzamos por mantenernos al día con las últimas tendencias y desarrollos. Ya sea a través de la adopción de nuevas tecnologías, la mejora de nuestras características existentes o la expansión de nuestras ofertas, nuestro objetivo es proporcionar a nuestros usuarios la mejor experiencia posible y ayudarles a conectar con el arte de una manera significativa y enriquecedora.</p>
                </div>
                <div className="info-container">
                    <p><ul>
                        <li>1. Accesibilidad: Hacer que el arte y la cultura sean accesibles para todos en la Universidad Metropolitana, independientemente de su campo de estudio o antecedentes. Creemos que el arte es un derecho humano y trabajamos para eliminar las barreras que impiden a las personas acceder a él.</li>
                        <li>2. Educación: Proporcionar una plataforma educativa que permita a los usuarios aprender sobre las diversas obras de arte y su significado cultural e histórico. Nos esforzamos por crear contenido educativo de alta calidad que sea atractivo e informativo.</li>
                        <li>3. Comunidad: Fomentar una comunidad de amantes del arte que participen activamente en la exploración y apreciación del arte. Creemos en el poder de la comunidad para inspirar y motivar a las personas a aprender y crecer juntas.</li>
                        <li>4. Innovación: Continuar innovando y mejorando nuestra plataforma para proporcionar la mejor experiencia de usuario posible. Estamos comprometidos con la adopción de nuevas tecnologías y enfoques para mejorar la forma en que las personas interactúan con el arte.</li>
                        <li>5. Expansión: Expandir nuestra plataforma para incluir tours de arte y culturales en otras universidades e instituciones. Creemos en el poder del arte para unir a las personas y aspiramos a llevar nuestra plataforma a tantas personas como sea posible.</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ObjectivesPage