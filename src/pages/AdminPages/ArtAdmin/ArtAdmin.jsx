import React, { useState, useEffect } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { app, auth, db, storage } from "../../../firebase/firebase-config";
import "./ArtAdmin.css";

import {
  getDocs,
  query,
  collection,
  where,
  deleteDoc
} from "firebase/firestore";
import Title from "../../../components/Title/Title";
import "./ArtAdmin.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button, Popover, PopoverBody } from "reactstrap";
import { ADMIN_CREATE_OBRAS_URL, ADMIN_EDIT_OBRAS_BASE_URL } from "../../../constants/urls";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";

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
    navigate(`${ADMIN_EDIT_OBRAS_BASE_URL}${obra.nombre}`, { state: obra });
  };

  const handleCrearObra = () => {
    navigate(ADMIN_CREATE_OBRAS_URL);
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
      <AdminNavbar/>
      <div className="container">
        <br />
        <br />
        <br />
        <Title title="Administrador de obras" />

        <Button color="success" style={{ float: 'left' }} onClick={() => handleCrearObra()}>
          Agregar nueva obra
        </Button>{" "}
        <br /> <br /> <br />
      
        <Table className="shadow-table">
          <thead>
            <tr>
              <th className="d-none d-sm-table-cell">#</th>
              <th>Nombre</th>
              <th className="d-none d-sm-table-cell">Año</th>
              <th className="d-none d-sm-table-cell">Autor</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {obras.map((obra, index) => (
              <tr key={index}>
                {/* Celdas de la tabla */}
                <td className="d-none d-sm-table-cell" style={{ width: '10%' }}>{index + 1}</td>

                <td style={{ width: '20%' }}>{obra.nombre}</td>

                <td style={{ width: '20%' }} className="d-none d-sm-table-cell">{obra.año}</td>
                <td style={{ width: '20%' }}  className="d-none d-sm-table-cell">{obra.autor}   </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      color="primary"
                      onClick={() => handleEditarObra(obra)}
                      style={{ marginRight: "15%" }}
                    >
                      ✏️
                    </Button>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
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
      <br />
      <br />
      
    </div>
  );
};

export default ArtAdmin;
