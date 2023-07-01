import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import Title from "../../../components/Title/Title";
import "./AdminPage.css";
import React, { useState } from 'react';
import {
  CardGroup, Card, CardTitle, CardText, Button
} from 'reactstrap';

import { useNavigate } from "react-router-dom";


const AdminPage = () => {

  
const navigate = useNavigate();

const handleTour = () => {
  navigate(`/admin-tours`);
};
const handleobras = () => {
  navigate(`/adminobras`);
};

const handlereserve = () => {
  navigate(`/admin-reserve`);
};

  return (
    <div>
      <AdminNavbar />
      <div style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
        <br /> <br /> <br />
        <Title title="Bienvenido Administrador" />

        <CardGroup>
          <Card
            body
            inverse
            style={{
              backgroundColor: '#333',
              borderColor: '#333',
              margin: '10px',
              width: '400px',
              marginBottom: '5%'
            }}
          >
            <CardTitle className="tour-title"> Gestor de Tours </CardTitle>
            <CardText>
            <hr />🚩
              En este módulo usted podrá agregar un nuevo tour, editarlo, gestionar las obras relacionadas, programar sus fechas o incluso eliminarlo.
            </CardText>
            <Button onClick={() => handleTour()} >Ir a Gestor de Tours  </Button>
          </Card>

          <Card
            body
            inverse
            style={{
              backgroundColor: '#333',
              borderColor: '#333',
              margin: '10px',
              width: '400px',
              marginBottom: '5%'
            }}
          >
            <CardTitle className="tour-title"> Gestor de Obras </CardTitle>
            <CardText>
              <hr /> 🎨
              Aquí usted podrá agregar una nueva obra, editar  su información o incluso eliminar alguna obra en caso de requerirlo.
            </CardText>
            <Button onClick={() => handleobras()}> Ir a Gestor de Obras </Button>
          </Card>

          <Card
            body
            inverse
            style={{
              backgroundColor: '#333',
              borderColor: '#333',
              margin: '10px',
              width: '400px',
              marginBottom: '5%'
            }}
          >
            <CardTitle className="tour-title"> Gestor de Reservas </CardTitle>
            <CardText>
            <hr /> ☎️
              Aquí usted podrá visualizar todas  las reservas de los usuarios e incluso cancelar una reserva de ser necesario. 
            </CardText>
            <Button onClick={() => handlereserve()}> Ir a Gestor de Reservas  </Button>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default AdminPage;
