import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {  app, auth, db } from "../../../firebase/firebase-config";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import Slider from "../../../components/Slider/Slider";
import Title from "../../../components/Title/Title";
import Sidebar from "../../../components/Sidebar/Sidebar";

const storage = getStorage();

const TourEdit = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    nombre: "",
    fecha: "",
    descripcion: "",
    ubicacion: "",
    imagen: "",
  });

  useEffect(() => {
    const fetchTour = async () => {
      try {
        if (!nombre) {
          alert("El nombre del tour no está definido.");
          return;
        }

        const toursCollectionRef = collection(db, "Tours");
        const q = query(toursCollectionRef, where("nombre", "==", nombre));
        const tourSnapshot = await getDocs(q);

        if (!tourSnapshot.empty) {
          tourSnapshot.forEach((doc) => {
            setTour(doc.data());
          });
        } else {
          alert("El tour no existe.");
        }
      } catch (error) {
        alert("Error al obtener el tour:", error);
      }
    };

    fetchTour();
  }, [nombre]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTour((prevTour) => ({ ...prevTour, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setTour((prevTour) => ({ ...prevTour, imagen: url }));
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const toursCollectionRef = collection(db, "Tours");
      const q = query(toursCollectionRef, where("nombre", "==", nombre));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const tourDoc = querySnapshot.docs[0];
        await setDoc(tourDoc.ref, tour);
        alert("Tour actualizado exitosamente");
      } else {
        alert("El tour no existe.");
      }
    } catch (error) {
      alert("Error al actualizar el tour:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/admin-tours");
  };

  

  return (
    <div className="App">
      <Sidebar />
      <div className="main-admin" style={{ maxWidth: "60%", margin: "0 auto" }}>
        <Title title="Editando Tour" />

        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={tour.nombre}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fecha">Fecha</Label>
                <Input
                  type="text"
                  name="fecha"
                  id="fecha"
                  value={tour.fecha}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="descripcion">Descripción</Label>
                <Input
                  type="textarea"
                  name="descripcion"
                  id="descripcion"
                  value={tour.descripcion}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="ubicacion">Ubicación</Label>
                <Input
                  type="text"
                  name="ubicacion"
                  id="ubicacion"
                  value={tour.ubicacion}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="imagen">Imagen de Portada </Label>
                <Input
                  type="file"
                  name="imagen"
                  id="imagen"
                  onChange={handleImageUpload}
                />
              </FormGroup>

              

              <Button color="primary" type="submit" style={{ marginRight: '7px' }}>
                Guardar
              </Button>
              <Button color="dark" style={{ marginRight: '7px' }} onClick={handleGoBack}>
                Volver
              </Button>
              
            </Form>
          </Col>
          <Col md={6}>
            {tour.imagen && (
              <img
                src={tour.imagen}
                alt="Imagen actual"
                style={{ maxWidth: "55%" }}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TourEdit;
