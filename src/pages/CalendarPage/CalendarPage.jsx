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
import React from "react";
import Subtitle from "../../components/Subtitle/Subtitle";
import FullCalendar from "reactjs-fullcalendar";
import "reactjs-fullcalendar/dist/fullcalendar.css";
import "./CalendarPage.css";

const CalendarPage = () => {
  const events = [
    // Aquí puedes proporcionar tus propios eventos del calendario
    {
      title: "Event 1",
      start: "2023-06-23",
      end: "2023-06-25",
    },
    {
      title: "Event 2",
      start: "2023-06-28",
      end: "2023-06-30",
    },
  ];

  return (
    <div className="App">
      <header className="back-header">
        <i className="fa-solid fa-arrow-left"></i>
      </header>
      <div className="calendar-section">
        <Subtitle subtitle="Calendario de eventos" />
        <div className="calendar-container">
          <FullCalendar events={events} />
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
