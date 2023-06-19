import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import DatePicker from 'react-date-picker';
import DatePickerReact from 'react-datepicker';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import Subtitle from "../../components/Subtitle/Subtitle";
import "./CalendarPage.css"

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="App">
            <header className="back-header">
                <i className="fa-solid fa-arrow-left"></i>
            </header>
            <div className="calendar-section">
                <Subtitle subtitle="Calendario de eventos" />
                <div className="calendar-container">
                    <Calendar
                        localizer={localizer}
                        events={[]}
                        startAccessor="start"
                        endAccessor="end"
                    />
                    <DatePicker
                        onChange={setDate}
                        value={date}
                    />
                    <DatePickerReact
                        selected={date}
                        onChange={setDate}
                    />
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