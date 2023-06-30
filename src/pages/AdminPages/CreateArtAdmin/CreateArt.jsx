//Página  Cargar Obra Admin
// En esta página, el administrador podrá cargar una obra de arte. 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc, query, where, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase/firebase-config";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input, Col, Row, Toast, ToastBody, ToastHeader } from "reactstrap";
import Title from "../../../components/Title/Title";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import { CustomToast } from "../../../components/CustomToast/CustomToast";

const storage = getStorage();

const CreateArt = () => {
  const navigate = useNavigate();



  const [obra, setObra] = useState({
    nombre: "",
    ubicacion: "",
    año: "",
    autor: "",
    tecnica: "",
    dimensiones: "",
    imagen: ""
  });

  const [imagen, setImagen] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setObra((prevObra) => ({ ...prevObra, [name]: value }));
    setShowToast(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setObra((prevObra) => ({ ...prevObra, imagen: url }));
      });
    });
    setShowToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !obra.nombre ||
      !obra.ubicacion ||
      !obra.año ||
      !obra.autor ||
      !obra.tecnica ||
      !obra.dimensiones ||
      !obra.imagen

    ) {
      setShowToast(true);
      return;
    }


    try {
      const obrasCollection = collection(db, "Obras");
      await addDoc(obrasCollection, {
        nombre: obra.nombre,
        ubicacion: obra.ubicacion,
        año: obra.año,
        autor: obra.autor,
        tecnica: obra.tecnica,
        dimensiones: obra.dimensiones,
        imagen: obra.imagen
      });

   
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
      <AdminNavbar/>
      <div className="main-admin" style={{ maxWidth: "60%", margin: "0 auto" }}>
        <Title title="Administrar obras" />
        
        <Row>
          
          <Col md={6}>
        
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
                <Label for="dimensiones">Dimensiones</Label>
                <Input
                  type="text"
                  name="dimensiones"
                  id="dimensiones"
                  value={obra.dimensiones}
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

              <Button color="primary" type="submit" style={{ marginRight: '5px' }}>
                Guardar
              </Button>
              <Button color="dark" style={{ marginLeft: '5px' }} onClick={handleGoBack}>
                Volver
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            {obra.imagen && (
              <img
                src={obra.imagen}
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

export default CreateArt;
