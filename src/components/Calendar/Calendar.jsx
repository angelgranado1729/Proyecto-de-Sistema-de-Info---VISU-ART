// import React from 'react';
// import './Calendar.css';

// class Calendario extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   render() {
//     const year = this.state.date.getFullYear();
//     const month = this.state.date.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const days = Array.from({length: daysInMonth}, (_, i) => i + 1);

//     return (
//       <div className="calendar-grid">
//         {days.map(day => (
//           <div className="calendar-day" key={day}>{day}</div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Calendario;
