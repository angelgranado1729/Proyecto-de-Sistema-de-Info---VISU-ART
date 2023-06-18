import Subtitle from "../../components/Subtitle/Subtitle";
import Calendario from '../../components/Calendar/Calendar';
import "./CalendarPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CalendarPage = () => {
    return (
        <div className="App">
            <header className="back-header">
                <FontAwesomeIcon icon={faArrowLeft} />
            </header>
            <div className="calendar-section">
                <Subtitle subtitle="Calendario de eventos"/>
                <div className="calendar-container">
                    <Calendario /> {}
                </div>
            </div>
            <div className="navegation">
                <div className="box">
                    <p>Nada en tu agenda?</p>
                    <button className="blue-btn">Registrarse ahora</button>
                </div>
                <div className="box">
                    <p></p>
                </div>
                <div className="box">
                <p>Todavía no estas seguro?</p>
                    <button className="blue-btn">Revisar Tours</button>
                </div>
        </div>
      </div>
    )
}

export default CalendarPage;