import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase-config";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Slider from "../../components/Slider/Slider";
import Title from "../../components/Title/Title";
import Sidebar from "../../components/Sidebar/Sidebar";

const ArtEdit = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const [obra, setObra] = useState({
    nombre: "",
    ubicacion: "",
    año: "",
    autor: "",
    tecnica: "",
    dimensiones: ""
  });

  useEffect(() => {
    const fetchObra = async () => {
      try {
        if (!nombre) {
          alert("El nombre de la obra no está definido.");
          return;
        }

        const obrasCollectionRef = collection(db, "Obras");
        const q = query(obrasCollectionRef, where("nombre", "==", nombre));
        const obraSnapshot = await getDocs(q);

        if (!obraSnapshot.empty) {
          obraSnapshot.forEach((doc) => {
            setObra(doc.data());
          });
        } else {
          alert("La obra no existe.");
        }
      } catch (error) {
        alert("Error al obtener la obra:", error);
      }
    };

    fetchObra();
  }, [nombre]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setObra((prevObra) => ({ ...prevObra, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obrasCollection = collection(db, "Obras");
      const q = query(obrasCollection, where("nombre", "==", nombre));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const obraDoc = querySnapshot.docs[0];
        await setDoc(obraDoc.ref, obra);
        alert("Obra actualizada exitosamente");
      } else {
        alert("La obra no existe.");
      }
    } catch (error) {
      alert("Error al actualizar la obra:", error);
    }
  };

  const handleGoBack = () => {
    navigate("/admin-obras");
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
              name="tecnica"
              id="tecnica"
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

export default ArtEdit;
