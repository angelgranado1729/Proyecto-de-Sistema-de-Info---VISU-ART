import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, auth, db } from "../../../firebase/firebase-config";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import Title from "../../../components/Title/Title";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";

const storage = getStorage();

const CreateTour = () => {
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    nombre: "",
    ubicacion: "",
    descripcion: "",
    fecha: "",
    imagen: "",
    obras: [],
  });

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
      const toursCollection = collection(db, "Tours");
      await addDoc(toursCollection, {
        nombre: tour.nombre,
        ubicacion: tour.ubicacion,
        descripcion: tour.descripcion,
        fecha: tour.fecha,
        imagen: tour.imagen,
        obras: tour.obras,
      });

      alert("Tour creado exitosamente");
      navigate("/admin-tours");
    } catch (error) {
      alert("Error al crear el tour:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/admin-tours");
  };

  return (
    <div className="App">
      <AdminNavbar />
      <div
        className="main-admin"
        style={{ maxWidth: "60%", margin: "0 auto" }}
      >
        <Title title="Administrar tours" />
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
                <Label for="descripcion">Descripción</Label>
                <Input
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  value={tour.descripcion}
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
                <Label for="imagen">Imagen</Label>
                <Input
                  type="file"
                  name="imagen"
                  id="imagen"
                  onChange={handleImageUpload}
                />
              </FormGroup>

              <Button
                color="primary"
                type="submit"
                style={{ marginRight: "5px" }}
              >
                Guardar
              </Button>
              <Button
                color="dark"
                style={{ marginLeft: "5px" }}
                onClick={handleGoBack}
              >
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

export default CreateTour;
