import FeedbackDropdownMenu from "../../components/DropdownMenu/FeedbackDropdownMenu";
import Rating from "../../components/Rating/Rating";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./FeedbackPage.css"


const FeedbackPage = () => {
    return (
        <div className="App">
            <header className="back-header">
            <i class="fa-solid fa-arrow-left"></i>
            </header>
            <div className="feedback-section">
                <Subtitle subtitle="Queremos escucharte!"/>
                <p>Cuéntanos sobre tu experiencia en los tours</p>
                <div className="feedback-container">
                    <div className="feedback-menu">
                    <label htmlFor="">Sobre que tour nos quieres contar?</label>
                    <FeedbackDropdownMenu/>
                    </div>
                    <div className="rating-menu">
                        <p>Puntaje: </p>
                        <Rating/>
                    </div>
                    <div className="feedback-decoration1"></div>
                    <div className="feedback-decoration2"></div>
                    <input type="text" className="input-feedback" placeholder="Añade tus opiniones"/>
                </div>
                <button className="blue-btn">Enviar</button>
            </div>

        </div>
    )
}

export default FeedbackPage