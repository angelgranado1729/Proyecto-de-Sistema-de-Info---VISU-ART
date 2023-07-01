import  { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./CalendarPage.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import { CardSubtitle } from 'reactstrap';

const localizer = momentLocalizer(moment);
// ]hacer el calendario mas grande y averiguar si se pueden vincular los eventos a las paginas de resevras de tour 

const Calendario = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Tours'));
    console.log(q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let eventsArray = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.fecha.forEach((date) => {
          eventsArray.push({
            title: data.nombre,
            start: moment(date, 'DD/MM/YYYY').toDate(),
            end: moment(date, 'DD/MM/YYYY').toDate(),
            allDay: true,
          });
        });
      });
      setEvents(eventsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <div className="calendar-section">
      <header className="back-header">
        <i className="fa-solid fa-arrow-left"></i>
      </header>
      <Subtitle subtitle="Calendario de eventos" />
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
        <div className="calendar-navegation">
          <div className="calendar-box">
            <p>Nada en tu agenda?</p>
            <button className="blue-btn">Registrarse ahora</button>
          </div>
          <div className="calendar-box"><p></p></div>
          <div className="calendar-box">
            <p>Todavía no estás seguro?</p>
            <button className="blue-btn">Revisar Tours</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calendario;
