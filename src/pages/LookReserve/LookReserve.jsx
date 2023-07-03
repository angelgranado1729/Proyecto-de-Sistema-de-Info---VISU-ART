import React, { useState, useEffect } from "react";
import { app, auth, db, storage } from "../../firebase/firebase-config";
import { query, collection, getDocs, doc, getDoc, where } from "firebase/firestore";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import { Table, Button, Label } from "reactstrap";
import { useUserContext } from "../../contexts/UserContext";
import "./LookReserve.css"


const LookReserve = () => {
  const { user } = useUserContext(); // Obtener el usuario actual del contexto
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  const handleEditProfile = () => {
    navigate("/user-profile");
  };

  const [upcomingReservations, setUpcomingReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);
  const [tours, setTours] = useState({});

  useEffect(() => {
    const getReservations = async () => {
      const reservationsQuery = query(collection(db, "Reservas"));
      const reservationsSnapshot = await getDocs(reservationsQuery);

      if (!reservationsSnapshot.empty) {
        const reservationsData = reservationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const userReservations = reservationsData.filter(
          (reservation) => reservation.user_id === user.id
        );

        const currentDate = new Date().getTime();
        const upcoming = [];
        const past = [];

        for (const reservation of userReservations) {
          const [day, month, year] = reservation.fecha.split("/");
          const reservationDate = new Date(`${month}/${day}/${year}`).getTime();
          if (reservationDate >= currentDate) {
            upcoming.push(reservation);
          } else {
            past.push(reservation);
          }
        }

        setUpcomingReservations(upcoming);
        setPastReservations(past);

        // Obtener información de los tours asociados a las reservas
        const tourIds = new Set(userReservations.map((reservation) => reservation.tour_id));

        const toursData = {};

        for (const tourId of tourIds) {
          const tourDoc = doc(db, "Tours", tourId);
          const tourSnapshot = await getDoc(tourDoc);
          if (tourSnapshot.exists()) {
            toursData[tourId] = tourSnapshot.data();
          }
        }

        setTours(toursData);
      }
    };

    if (user) {
      getReservations();
    }
  }, [user]);

  return (
    <div className="App">
      <header className="back-header">
        <i onClick={handleGoBack} className="fa-solid fa-arrow-left"></i>
      </header>
      <Title title="Mis Reservas" />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div className="edit-profile-button-left">
          <button className="reserve-btn" onClick={handleEditProfile}>
            Editar Perfil
          </button>
        </div>
        <div>
            <br /><br />
         <Label className="subtitles-calendar" for="viejaFecha"> Proximas Fechas </Label>
         <br />
          <Table className="shadow-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Tour</th>
                <th>Ubicacion</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {upcomingReservations.map((reservation, index) => (
                <tr key={reservation.id}>
                  <td>{index + 1}</td>
                  <td>{tours[reservation.tour_id]?.nombre}</td>
                  <td>{tours[reservation.tour_id]?.ubicacion}</td>
                  <td>{reservation.fecha}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
            <br /><br />
        <Label className="subtitles-calendar" for="viejaFecha"> Reservas pasadas </Label>
        <br />
          <Table className="shadow-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Tour</th>
                <th>Ubicacion</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {pastReservations.map((reservation, index) => (
                <tr key={reservation.id}>
                  <td>{index + 1}</td>
                  <td>{tours[reservation.tour_id]?.nombre}</td>
                  <td>{tours[reservation.tour_id]?.ubicacion}</td>
                  <td>{reservation.fecha}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LookReserve;
