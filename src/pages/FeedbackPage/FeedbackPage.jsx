import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./FeedbackPage.css"


const FeedbackPage = () => {
    return (
        <div className="App">
            <header className="back-header">
            <i class="fa-solid fa-arrow-left"></i>
            </header>
            <div className="feedback-section">

            <div className="decoration down-decoration"></div>
                <Subtitle subtitle="Queremos escucharte!"/>
                <p>Cuéntanos sobre tu experiencia en los tours</p>
                <div className="feedback-container">
                    <div className="feedback-menu">
                    <label htmlFor="">Sobre que tour nos quieres contar?</label>
                    <DropdownMenu/>
                    </div>
                    <input type="text" className="input-feedback" placeholder="Añade tus opiniones"/>
                </div>
                <button className="blue-btn">Enviar</button>
            </div>

        </div>
    )
}

export default FeedbackPage