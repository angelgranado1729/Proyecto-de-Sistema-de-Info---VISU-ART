import React, { useState, useEffect } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { app, auth, db, storage } from "../../firebase/firebase-config"
import { getDocs, query, collection, where, deleteDoc } from "firebase/firestore";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import "./ArtAdmin.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button, Popover, PopoverBody } from "reactstrap";

const ArtAdmin = () => {
  const [obras, setObras] = useState([]);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const obrasCollection = collection(db, "Obras");
        const obrasSnapshot = await getDocs(obrasCollection);
        const obrasData = obrasSnapshot.docs.map((doc) => doc.data());
        setObras(obrasData);
        setReload(false);
      } catch (error) {
        console.error("Error fetching obras:", error);
      }
    };

    fetchObras();
  }, [reload]);

  const handleEditarObra = (obra) => {
    navigate(`/admin-edit/${obra.nombre}`, { state: obra });
  };

  const handleCrearObra = () => {
    navigate(`/admin-create`);
  };

  const handleDelete = async (nombre) => {
    if (window.confirm("¿Estás seguro de que deseas borrar esta obra?")) {
      try {
        const obrasCollection = collection(db, "Obras");
        const q = query(obrasCollection, where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const obraDoc = querySnapshot.docs[0];
          await deleteDoc(obraDoc.ref);
          alert("Obra eliminada exitosamente");
          setReload(true);
        } else {
          alert("La obra no existe.");
        }
      } catch (error) {
        alert("Error al eliminar la obra:", error);
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-admin">
        <Title title="Administrador de obras" />

        <Button color="success" onClick={() => handleCrearObra()}>
          Agregar nueva obra
        </Button>{" "}
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Año</th>
              <th>Autor</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
    {obras.map((obra, index) => (
      <tr key={index}>
        {/* Celdas de la tabla */}
        <td style={{ width: '10%' }}>{index + 1}</td>
       
        <td style={{ width: '20%' }}>{obra.nombre}</td>
       
        <td style={{ width: '20%' }}>{obra.año}</td>
        <td style={{ width: '20%' }}>{obra.autor}</td>
        <td>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="primary"
              onClick={() => handleEditarObra(obra)}
              style={{ marginRight: "15%" }}
            >
              ✏️
            </Button>
            <Button
              style={{ marginRight: "15%" }}
              color="danger"
              onClick={() => handleDelete(obra.nombre)}
            >
              🗑️
            </Button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ArtAdmin;
