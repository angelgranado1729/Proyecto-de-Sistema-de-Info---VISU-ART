import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase/firebase-config";
import {
  getDocs,
  query,
  collection,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import Title from "../../../components/Title/Title";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button, Label } from "reactstrap";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import "./EditCalendar.css";

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

    const updatedObras = tour.obras.filter((obra) => obra.nombre !== nombreObra);

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
      <AdminNavbar />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <br />
        <br />
        <Title title={`${tour.nombre}`} />

        <Button
          color="dark"
          style={{ marginRight: "7px" }}
          onClick={handleGoBack}
        >
          Volver al menu de Tours
        </Button>

        <br />
        <br />
        <br />

        <div className="table-responsive">
          <Label className="subtitles-calendar"> Obras incluidas </Label>
          {obrasAgregadas.length > 0 ? (
            <Table className="shadow-table">
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
                    <td style={{ width: "40%", wordBreak: "break-all" }}>
                      {obra.nombre}
                    </td>
                    <td style={{ width: "30%", wordBreak: "break-all" }}>
                      {obra.ubicacion}
                    </td>
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
      </div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <br />
        <br />
        <Label className="subtitles-calendar"> Obras no incluidas </Label>

        <div className="table-responsive">
          <Table className="shadow-table">
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
                  <td style={{ width: "40%", wordBreak: "break-all" }}>
                    {obra.nombre}
                  </td>
                  <td style={{ width: "30%", wordBreak: "break-all" }}>
                    {obra.ubicacion}
                  </td>
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
          </Table>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TourEditObras;

