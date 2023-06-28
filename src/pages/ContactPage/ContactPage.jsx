import React from 'react';
import './ContactPage.css';
import FormItem from '../../components/FormItem/FormItem';
import Title from '../../components/Title/Title';

function ContactPage() {
  return (
    <div className="App">
      <header className="back-header">
        <i className="fa-solid fa-arrow-left"></i>
      </header>

      <Title title="Contáctanos" />

      <div className="formArea">
        <FormItem labelFor={"fName"} labelName={"firstName"} labelDesc={"Nombre:"} labelClass={"fInp"} formType={"text"} />
        <FormItem labelFor={"lName"} labelName={"lastName"} labelDesc={"Apellido:"} labelClass={"fInp"} formType={"Text"} />
        <FormItem labelFor={"userMsg"} labelName={"userMessage"} labelDesc={"Comentario:"} labelClass={"fCom"} formType={"Text"} />


        <div className="iAmOutOfNames">
          <button name="finishContact" type="button" className="blue-btn">Enviar</button>
        </div>

      </div>

    </div>
  )
}

export default ContactPage