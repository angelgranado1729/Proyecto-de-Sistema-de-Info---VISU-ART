//Página  Editar Tour Admin 
// En esta página, el administrador podrá editar la información de un Tour. 

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, auth, db } from "../../../firebase/firebase-config";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import Slider from "../../../components/Slider/Slider";
import Title from "../../../components/Title/Title";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";

const storage = getStorage();

const TourEdit = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    nombre: "",
    descripcion: "",
    ubicacion: "",
    imagen: "",
    resumen: "",
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
      <AdminNavbar />
      <div style={{ marginLeft: '10%', marginRight: '5%' }}>
        <br />
        <br />
        <Title title="Editar Tour" />

        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="nombre">Nombre</Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={tour.nombre}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="descripcion">Descripción</Label>
                <Input
                  type="textarea"
                  name="descripcion"
                  id="descripcion"
                  value={tour.descripcion}
                  onChange={handleInputChange}
                  rows={Math.ceil(tour.descripcion.length / 100)} // El numero 100 es para que el espacio sea la mitad del tamaño del texto
                  style={{ resize: 'none' }}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="ubicacion">Ubicación</Label>
                <Input
                  type="text"
                  name="ubicacion"
                  id="ubicacion"
                  value={tour.ubicacion}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="resumen">Resumen para tarjeta</Label>
                <Input
                  type="textarea"
                  name="resumen"
                  id="resumen"
                  value={tour.resumen}
                  rows={Math.ceil(tour.resumen.length / 100)} // El numero 100 es para que el espacio sea la mitad del tamaño del texto
                  style={{ resize: 'none' }}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="imagen">Imagen de Portada </Label>
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
            <br /> <br /> <br /> <br />
            {tour.imagen && (
              <img
                src={tour.imagen}
                alt="Imagen actual"
                style={{ maxWidth: "55%", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"}}
              />
            )}
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TourEdit;
