//Página  Crear Tour Admin
// En esta página, el administrador podrá crear un tour nuevo. 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, auth, db } from "../../../firebase/firebase-config";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input, Col, Row, Toast, ToastBody, ToastHeader } from "reactstrap";
import Title from "../../../components/Title/Title";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import { CustomToast } from "../../../components/CustomToast/CustomToast";
import { faL } from "@fortawesome/free-solid-svg-icons";

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
    resumen: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTour((prevTour) => ({ ...prevTour, [name]: value }));
    setShowToast(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setTour((prevTour) => ({ ...prevTour, imagen: url }));
      });
    });
    setShowToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar campos vacíos
    if (
      !tour.nombre ||
      !tour.ubicacion ||
      !tour.descripcion ||

      !tour.resumen ||
      !tour.imagen
    ) {
      setShowToast(true);
      return;
    }

    try {
      const toursCollection = collection(db, "Tours");
      await addDoc(toursCollection, {
        nombre: tour.nombre,
        ubicacion: tour.ubicacion,
        descripcion: tour.descripcion,
        imagen: tour.imagen,
        obras: tour.obras,
        resumen: tour.resumen,
      });

      navigate("/admin-tours");
    } catch (error) {
      setShowToast(true);
    }
  };

  const handleGoBack = () => {
    navigate("/admin-tours");
  };

  return (
    <div className="App">
      <AdminNavbar />
      <div className="main-admin" style={{ maxWidth: "60%", margin: "0 auto" }}>
        <Title title="Administrar tours" />
        <Row>
          <Col md={8}>
            <Toast isOpen={showToast} onClose={() => setShowToast(false)}>
            <CustomToast
                            typeToast="error"
                            title="¡Error!"
                            message="Ingreso los datos incorrectamente"
                            time={5000}
                        />
            </Toast>
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
                <Label for="resumen">Resumen para tarjeta</Label>
                <Input
                  type="textarea"
                  name="resumen"
                  id="resumen"
                  value={tour.resumen}
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

              <Button color="primary" type="submit" style={{ marginRight: "5px" }}>
                Guardar
              </Button>
              <Button color="dark" style={{ marginLeft: "5px" }} onClick={handleGoBack}>
                Volver
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateTour;
