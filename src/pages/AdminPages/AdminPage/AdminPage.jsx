import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import Title from "../../../components/Title/Title";
import "./AdminPage.css";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';



const AdminPage = () => {
    return (
        <div className="App">
        <AdminNavbar />
        <div style={{ marginLeft: '10%', marginRight: '10%'}}>
          <br /> <br /> <br />
          <Title title="Bienvenido Administrador"/>
        </div>
      
      </div>
        
    )
}

export default AdminPage