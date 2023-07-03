import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { app, db } from "../../../firebase/firebase-config";
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import Title from '../../../components/Title/Title';

const AdminPageContact = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const toursCollection = collection(db, "contacto");
      const toursSnapshot = await getDocs(toursCollection);
      const toursData = toursSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data
        };
      });
      setDocuments(toursData);
    };

    fetchDocuments();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const documentRef = doc(db, "contacto", id);
    await updateDoc(documentRef, { estado: newStatus });

    setDocuments(documents.map((doc) => {
      if (doc.id === id) {
        return { ...doc, estado: newStatus };
      }
      return doc;
    }));
  };

  const handleDelete = async (id) => {
    const documentRef = doc(db, "contacto", id);
    await deleteDoc(documentRef);

    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  // Filtrar documentos resueltos y no resueltos
  const resolvedDocuments = documents.filter((doc) => doc.estado === 'Resuelto');
  const unresolvedDocuments = documents.filter((doc) => doc.estado === 'Pendiente');

  return (
    <div className="App">
    <div style={{ background: '#fff9ec' }}>
      <AdminNavbar />
      <div style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '5%', background: '#fff9ec' }}>
        <br /> <br /> <br />
        <Title title="Contactos" />

        {resolvedDocuments.length > 0 && (
          <div>
            <h3 className='subtitles-contact'>Contactos Resueltos</h3>
            {resolvedDocuments.map((document) => (
              <Card key={document.id} style={{ marginBottom: '10px' }}>
                <CardBody className='shadow-block2'>
                  <CardTitle tag="h5">{document.correo}</CardTitle>
                  <p>Comentario: {document.comentario}</p>
                  <p>
                    Estado: <span style={{ color: 'green', marginLeft: '5px' }}>Resuelto</span>
                  </p>
                  <Button
                    color="warning"
                    style={{ marginRight: '5px' }}
                    onClick={() => handleStatusChange(document.id, 'Pendiente')}
                  >
                    Marcar como Pendiente
                  </Button>
                  <Button color="danger" onClick={() => handleDelete(document.id)}>
                    Eliminar
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {unresolvedDocuments.length > 0 && (
          <div>
            <br /> <br />
            <h3 className='subtitles-contact'>Contactos No Resueltos</h3>
            {unresolvedDocuments.map((document) => (
              <Card key={document.id} style={{ marginBottom: '10px' }}>
                <CardBody className='shadow-block2'>
                  <CardTitle tag="h5">{document.correo}</CardTitle>
                  <p>Comentario: {document.comentario}</p>
                  <p>
                    Estado: <span style={{ color: 'red', marginLeft: '5px' }}>Pendiente</span>
                  </p>
                  <Button
                    color="success"
                    style={{ marginRight: '5px' }}
                    onClick={() => handleStatusChange(document.id, 'Resuelto')}
                  >
                    Marcar como Resuelto
                  </Button>
                  <Button color="danger" onClick={() => handleDelete(document.id)}>
                    Eliminar
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default AdminPageContact;
