// import Subtitle from "../../components/Subtitle/Subtitle";
// import "./CalendarPage.css"


// const CalendarPage = () => {
//     return (
//         <div className="App">
//             <header className="back-header">
//                 <i className="fa-solid fa-arrow-left"></i>
//             </header>
//             <div className="calendar-section">
//                 <Subtitle subtitle="Calendario de eventos" />
//                 <div className="calendar-container">
//                 </div>
//             </div>
//             <div className="navegation">
//                 <div className="box">
//                     <p>Nada en tu agenda?</p>
//                     <button className="blue-btn">Registrarse ahora</button>
//                 </div>
//                 <div className="box">
//                     <p></p>
//                 </div>
//                 <div className="box">
//                     <p>Todavía no estas seguro?</p>
//                     <button className="blue-btn">Revisar Tours</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CalendarPage
import Subtitle from "../../components/Subtitle/Subtitle";
import "./CalendarPage.css";
import { Calender } from '../../../src/components/Calendar/Calendar';

const CalendarPage = () => {
  return (
    <div className="App">
      <header className="back-header">
        <i className="fa-solid fa-arrow-left"></i>
      </header>
      <div className="calendar-section">
        <Subtitle subtitle="Calendario de eventos" />
        <div className="calendar-container">
          <Calender />
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
          <p>Todavía no estás seguro?</p>
          <button className="blue-btn">Revisar Tours</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
