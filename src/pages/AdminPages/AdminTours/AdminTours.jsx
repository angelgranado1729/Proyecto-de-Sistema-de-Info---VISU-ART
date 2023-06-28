// Administrar de Tours 
// En esta página, el administrador podrá dejar su crear, modificar o eliminar un tour. 

import React, { useState, useEffect } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { app, auth, db, storage } from "../../../firebase/firebase-config"
import { getDocs, query, collection, where, deleteDoc } from "firebase/firestore";
import Title from "../../../components/Title/Title";
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Button} from "reactstrap";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";

const TourAdmin = () => {
  const [Tours, setTours] = useState([]);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);

  // Conexión con Firebase para obtener la colección de tours de la BD. 
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const toursCollection = collection(db, "Tours");
        const toursSnapshot = await getDocs(toursCollection);
        const toursData = toursSnapshot.docs.map((doc) => doc.data());
        setTours(toursData);
        setReload(false);
      } catch (error) {
        console.error("Error fetching obras:", error);
      }
    };

    fetchTours();
  }, [reload]);

  // Navigate a las paginas correspondientes de acuerdo al requisito. 
  const handleEditarTour = (Tour) => {
    navigate(`/admin-tours-edit/${Tour.nombre}`, { state: Tour });
  };

  const handleEditarTourObra = (Tour) => {
    navigate(`/admin-tours-edit-art/${Tour.nombre}`, { state: Tour });
  };

  const handleCrearTour = () => {
    navigate(`/admin-tour-create`);
  };

  const handleDelete = async (nombre) => {
    if (window.confirm("¿Está seguro de que desea borrar este Tour?")) {
      try {
        const toursCollection = collection(db, "Tours");
        const q = query(toursCollection, where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const tourDoc = querySnapshot.docs[0];
          await deleteDoc(tourDoc.ref);
          alert("Tour eliminado exitosamente");
          setReload(true);
        } else {
          alert("El tour no existe.");
        }
      } catch (error) {
        alert("Error al eliminar el tour:", error);
        console.log(error);
      }
    }
  };

  // HTML
  return (
    <div className="App">
      <AdminNavbar/>
      <div className="main-admin">
        <Title title="Administrador de Tours" />

        <Button color="success" onClick={() => handleCrearTour()}>
          Agregar nuevo Tour
        </Button>{" "}
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
    {Tours.map((tour, index) => (
      <tr key={index}>
        {/* Celdas de la tabla */}
        <td style={{ width: '10%' }}>{index + 1}</td>
       
        <td style={{ width: '20%' }}>{tour.nombre}</td>

        <td style={{ width: '20%' }}>{tour.fecha}</td>
       

        <td>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="primary"
              onClick={() => handleEditarTour(tour)}
              style={{ marginRight: "15%" }}
            >
              ✏️
            </Button>
            
            <Button
              style={{ marginRight: "15%" }}
              color="success"
              onClick={() => handleEditarTourObra(tour)}
            >
              🎨
            </Button>
            
            <Button
              style={{ marginRight: "15%" }}
              color="danger"
              onClick={() => handleDelete(tour.nombre)}
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

export default TourAdmin;
