//el codigo de arriba es el codigo de beatriz viejo. 
//si hay que añadir mas campos se debe agregar un estado para cada campo, un input para que el usuario pueda editar el valor
//, y luego incluye el valor en el objeto que se pasa a "updateUser"
import  { useState } from 'react';
import { useUserContext } from "../../../contexts/UserContext";
import Subtitle from "../../../components/Subtitle/Subtitle";
import "./UserProfilePage.css"
import {
    ArrowLeft,

} from "react-bootstrap-icons";
import { HOME_URL } from "../../../constants/urls";
import { Link } from "react-router-dom";


const UserProfilePage = () => {
    const { user } = useUserContext();
    const [name] = useState(user.name);
    const [email] = useState(user.email);


    return (
      <div className="App-v2">
        <header className="back-header top-editprofile">
          <Link to={HOME_URL}>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartBlueLogo.jpg?alt=media&token=ab0e88ba-968b-4b0f-9b83-42c8e0183e66"
            alt=""
          />
        </header>
        <div className="decorations-container">
          <div className="editprofile-decoration1"></div>
          <div className="editprofile-decoration2"></div>
          <div className="editprofile-container">
            <div className="editprofile-img"></div>
            <i className="fa-solid fa-pen-to-square"></i>
            <Subtitle subtitle="Edita tus datos:" />
            <div className="input-container">
              <div className="column">
                <div className="input">
                  <label>Nombre</label>
                  <input type="text" value={name} readOnly />
                  <span></span>
                </div>
                <div className="input">
                  <label>Correo</label>
                  <input type="text" value={email} readOnly />
                  <span>correo@ejemplo.com</span>
                </div>
              </div>
              <div className="column-center">
                <p></p>
              </div>
              <div className="column">
                <div className="input">
                  <label>Contraseña</label>
                  <input type="text" value={"********"} readOnly />
                  <span>Más 6 de dígitos e incluya carácteres especiales</span>
                </div>
                <div className="input">
                  <label>Verifica tu contraseña</label>
                  <input type="text" value={"********"} readOnly />
                  <span>Más 6 de dígitos e incluya carácteres especiales</span>
                </div>
                {/* Agregar mas inputs segun lo que podamos anadir en firebase */}
              </div>
            </div>
            <button className="editprofile-btn">Editar perfil</button>
          </div>
        </div>
      </div>
    );
}

export default UserProfilePage

