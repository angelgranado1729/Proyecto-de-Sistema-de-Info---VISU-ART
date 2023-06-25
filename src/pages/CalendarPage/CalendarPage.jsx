
import  { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

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
    <div className="calendar-container" style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
      <div className="navegation">
        <div className="box">
          <p>Nada en tu agenda?</p>
          <button className="blue-btn">Registrarse ahora</button>
        </div>
        <div className="box">
          <p>Todavía no estás seguro?</p>
          <button className="blue-btn2">Revisar Tours</button>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
