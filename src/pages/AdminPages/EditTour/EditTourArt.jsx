//Página  Editar Obras Tour Admin 
// En esta página, el administrador podrá agregar o eliminar las obras de artes relacionadas a un tour. 

import React, { useState, useEffect } from "react";
import { Link, Route, useNavigate, useParams } from "react-router-dom";
import {  app, auth, db, storage  } from "../../../firebase/firebase-config";
import {
  getDocs,
  query,
  collection,
  where,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import Title from "../../../components/Title/Title";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button, Popover, PopoverBody } from "reactstrap";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";


const TourEditObras = () => {
  const [tour, setTour] = useState(null);
  const [obras, setObras] = useState([]);
  const { nombre } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchTour = async () => {
      const tourSnapshot = await getDocs(
        query(collection(db, "Tours"), where("nombre", "==", nombre))
      );

      if (tourSnapshot.empty) {
        // El tour no se encontró en la base de datos
        return;
      }

      const tourData = tourSnapshot.docs[0].data();

      // Actualiza el estado solo con el tour correspondiente
      setTour({ id: tourSnapshot.docs[0].id, ...tourData });
    };

    const fetchObras = async () => {
      const obrasSnapshot = await getDocs(collection(db, "Obras"));
      const obrasData = obrasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setObras(obrasData);
    };

    fetchTour();
    fetchObras();
  }, [nombre]);

  const handleDelete = async (nombreObra) => {
    if (!tour) return;

    const updatedObras = tour.obras.filter(
      (obra) => obra.nombre !== nombreObra
    );

    await updateDoc(doc(db, "Tours", tour.id), {
      obras: updatedObras,
    });

    setTour((prevTour) => ({ ...prevTour, obras: updatedObras }));
  };

  const handleGoBack = () => {
    navigate("/admin-tours");
  };

  const handleAgregarObra = async (tourActual, obraToAdd) => {
    if (!tourActual || !obraToAdd) return;
  
    const updatedObras = [...tourActual.obras, obraToAdd];
  
    await updateDoc(doc(db, "Tours", tourActual.id), {
      obras: updatedObras,
    });
  
    const updatedTour = { ...tourActual, obras: updatedObras };
  
    setTour(updatedTour);
  };

  if (!tour) {
    return <div>Tour no encontrado</div>;
  }

  const obrasAgregadas = tour.obras;
  const obrasNoAgregadas = obras.filter(
    (obra) => !tour.obras.some((o) => o.nombre === obra.nombre)
  );

  return (
    <div className="App">
      <AdminNavbar/>
      <div style={{ marginLeft: '10%', marginRight: '10%'}}>
        <br></br>
        <br></br>
        <Title title={`Obras incluidas - ${tour.nombre}`}  />

        <Button color="dark" style={{ marginRight: '7px' }} onClick={handleGoBack}>
                Volver al menu de Tours
        </Button>

        <br></br>
        <br></br>
        <br></br>

        {obrasAgregadas.length > 0 ? (
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>

              <th>Ubicacion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {obrasAgregadas.map((obra, index) => (
              <tr key={index}>
                <td style={{ width: "10%" }}>{index + 1}</td>
                <td style={{ width: "40%" }}>{obra.nombre}</td>

                <td style={{ width: "30%" }}>{obra.ubicacion}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button

                      color="danger"
                      onClick={() => handleDelete(obra.nombre)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay obras agregadas.</p>
      )}
    </div>
    <div style={{ marginLeft: '10%', marginRight: '10%'}}>
      <br></br>
      <br></br>
      <Title title={`Obras no incluidas - ${tour.nombre}`} />
      <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>

             <th>Ubicacion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {obrasNoAgregadas.map((obra, index) => (
              <tr key={index}>
                <td style={{ width: "10%" }}>{index + 1}</td>
                <td style={{ width: "40%" }}>{obra.nombre}</td>
               <td style={{ width: "30%" }}>{obra.ubicacion}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      color="primary"
                      onClick={() => handleAgregarObra(tour, obra)}

                    >
                      Agregar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table >
      </div>
    </div>
  );
};

export default TourEditObras;
