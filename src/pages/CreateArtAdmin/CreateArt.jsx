import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Title from "../../components/Title/Title";
import Sidebar from "../../components/Sidebar/Sidebar";

const CreateArt = () => {
  const navigate = useNavigate();

  const [obra, setObra] = useState({
    nombre: "",
    ubicacion: "",
    año: "",
    autor: "",
    tecnica: "",
    dimensiones: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setObra((prevObra) => ({ ...prevObra, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obrasCollection = collection(db, "Obras");
      await addDoc(obrasCollection, obra);
      alert("Obra creada exitosamente");
      navigate("/adminobras");
    } catch (error) {
      alert("Error al crear la obra:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/adminobras");
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-admin">
        <Title title="Administrar obras" />

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input
              type="text"
              name="nombre"
              id="nombre"
              value={obra.nombre}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ubicacion">Ubicación</Label>
            <Input
              type="text"
              name="ubicacion"
              id="ubicacion"
              value={obra.ubicacion}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="año">Año</Label>
            <Input
              type="text"
              name="año"
              id="año"
              value={obra.año}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="autor">Autor</Label>
            <Input
              type="text"
              name="autor"
              id="autor"
              value={obra.autor}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tecnica">Técnica</Label>
            <Input
              type="text"
              name="tecnica"
              id="tecnica"
              value={obra.tecnica}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="tecnica">Dimensiones</Label>
            <Input
              type="text"
              name="dimensiones"
              id="dimensiones"
              value={obra.dimensiones}
              onChange={handleInputChange}
            />
          </FormGroup>

          <Button color="primary" type="submit" style={{ marginRight: '5px' }} >
            Guardar
          </Button>
          <Button color="dark" style={{ marginLeft: '5px' }} onClick={handleGoBack}>
            Volver
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateArt;
