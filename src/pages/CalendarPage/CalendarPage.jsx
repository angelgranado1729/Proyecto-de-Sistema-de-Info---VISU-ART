import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./CalendarPage.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import { HOME_URL } from "../../constants/urls";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);
// ]hacer el calendario mas grande y averiguar si se pueden vincular los eventos a las paginas de resevras de tour 

const Calendario = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
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
            id: doc.id, // Add the document ID as a field in the event
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

  const handleSelectEvent = (event) => {
    // Redirect the user to the tour details page when an event is clicked
    navigate(`/tour-details/${event.title}`);
  };


  return (
    <div className="App">
      <div className="decorationTop"></div>
      <div className="calendar-section">
        <header className="back-header top-editprofile">
          <Link to={HOME_URL}>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39"
            alt=""
          />
        </header>
        <Subtitle subtitle="Calendario de eventos" />
        <div className='fondo-detras-calendario'>
          <div className="calendar-container">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={handleSelectEvent} // Handle the event click
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
              <div className="decorationBottom"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="decorationBottom"></div>
    </div>

  );
};

export default Calendario;
