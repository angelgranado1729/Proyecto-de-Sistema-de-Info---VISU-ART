import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import './ContactPage.css';
import FormItem from '../../components/FormItem/FormItem';
import Title from '../../components/Title/Title';
import { useNavigate } from "react-router-dom";

import { app, auth, db, storage } from "../../firebase/firebase-config"
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const navigate = useNavigate();
  const estado = "Pendiente";

  const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const contactCollection = collection(db, 'contacto');
      await addDoc(contactCollection, {
        nombre: firstName,
        apellido: lastName,
        correo: email,
        comentario: userMessage,
        estado: estado,
      });
      console.log('Datos de contacto guardados exitosamente');

      // Mostrar la alerta
      alert('Tu comentario ha sido enviado.');

      // Redirigir a la dirección "/"
      navigate("/");
    } catch (error) {
      console.error('Error al guardar los datos de contacto:', error);
    }

    // Restablecer los campos del formulario
    setFirstName('');
    setLastName('');
    setEmail('');
    setUserMessage('');
  };

  return (
    <div className="App">
      <header className="back-header">
        <i onClick={handleGoBack} className="fa-solid fa-arrow-left"></i>
      </header>
      <div className='contact-decoration_container'>    
        <div className="contact-decoration3"></div>      
        <Title title="¡Contáctanos!" />
      </div>
      <div className="formArea">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <p className="contact-formtext" for="fName">
              Nombre:
            </p>
            <Input
              type="text"
              name="fName"
              id="fName"
              className="shadow"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <p className="contact-formtext" for="lName">
              Apellido:
            </p>
            <Input
              type="text"
              name="lName"
              id="lName"
              className='shadow'
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <p className="contact-formtext" for="email">
              Correo electrónico:
            </p>
            <Input
              type="email"
              name="email"
              id="email"
              className='shadow'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormGroup>
          <div className='contact-decoration_container'>            
          <FormGroup>
              <div className="contact-decoration1"></div>
            <p className="contact-formtext" for="userMsg">
              Mensaje:
            </p>
            <Input
              type="textarea"
              name="userMsg"
              id="userMsg"
              className='shadow'
              value={userMessage}
              onChange={(event) => setUserMessage(event.target.value)}
              rows={9}
              required
            />
          </FormGroup>
          </div>
        </Form>
        <button type="submit" style={{background:"#1a3e5a"}} className="contact-btn"> Enviar </button>
      </div>
      <div className="contact-decoration2"></div>
    </div>
  );
};

export default ContactPage;
