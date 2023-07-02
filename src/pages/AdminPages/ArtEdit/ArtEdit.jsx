//Página  Editar Obra Admin
// En esta página, el administrador podrá editar una obra de arte

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase/firebase-config";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import Title from "../../../components/Title/Title";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";

const storage = getStorage();

const ArtEdit = () => {
  const { nombre } = useParams();
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setObra((prevObra) => ({ ...prevObra, imagen: url }));
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const obrasCollectionRef = collection(db, "Obras");
      const q = query(obrasCollectionRef, where("nombre", "==", nombre));
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
    navigate("/adminobras");
  };

  return (
    <div className="App">
      <AdminNavbar />
      <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <br />
        <br />
        <br />
        <Title title="Administrar obras" />

        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="nombre">Nombre</Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={obra.nombre}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="ubicacion">Ubicación</Label>
                <Input
                  type="text"
                  name="ubicacion"
                  id="ubicacion"
                  value={obra.ubicacion}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="año">Año</Label>
                <Input
                  type="text"
                  name="año"
                  id="año"
                  value={obra.año}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="autor">Autor</Label>
                <Input
                  type="text"
                  name="autor"
                  id="autor"
                  value={obra.autor}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="tecnica">Técnica</Label>
                <Input
                  type="text"
                  name="tecnica"
                  id="tecnica"
                  value={obra.tecnica}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="dimensiones">Dimensiones</Label>
                <Input
                  type="text"
                  name="dimensiones"
                  id="dimensiones"
                  value={obra.dimensiones}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label style={{ fontWeight: "bold" }} for="imagen">Imagen</Label>
                <Input
                  type="file"
                  name="imagen"
                  id="imagen"
                  onChange={handleImageUpload}
                />
              </FormGroup>
              <br />
              <Button color="primary" type="submit">
                Guardar
              </Button>
              <Button color="dark" onClick={handleGoBack}>
                Volver
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <br /> <br /> <br /> <br />
            {obra.imagen && (
              <img
                src={obra.imagen}
                alt="Imagen actual"
                style={{ maxWidth: "55%", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
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

export default ArtEdit;
