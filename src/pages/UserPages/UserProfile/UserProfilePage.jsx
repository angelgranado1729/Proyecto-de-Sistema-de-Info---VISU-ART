
import  { useState } from 'react';
import { useUserContext } from "../../../contexts/UserContext";
import Subtitle from "../../../components/Subtitle/Subtitle";
import "./UserProfilePage.css"
import { HOME_URL , USER_PROFILE_EDIT_URL } from "../../../constants/urls";
import { Link } from "react-router-dom";
import { storage} from "../../../firebase/firebase-config";
import  { useEffect } from "react";
import {  getDownloadURL } from "firebase/storage";
import { ref as getRef } from "firebase/storage";



const UserProfilePage = () => {
    const { user } = useUserContext();
    const [name] = useState(user.name);
    const [email] = useState(user.email);
    const [url, setUrl] = useState(null);
  
  
    // muestra la foto (rescata el valor para mostrarlo)
    const watch = async () => {
      const ref = getRef(storage, "usersphotos/" + user.id);
      const downloadURL = await getDownloadURL(ref);
      setUrl(downloadURL);
      console.log(downloadURL);
    
    };



    useEffect(() => {
      watch()
  }, [])


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
          <div className="editprofile-img">
            <img className="imagenusuario" src={url  || "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}/>
            </div>
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
                  <label>Verifica tu contraseña actual</label>
                  <input type="text" value={"********"} readOnly />
                  <span>Más 6 de dígitos e incluya carácteres especiales</span>
                </div>
                <div className="input">
                  <label>Tu nueva contraseña</label>
                  <input type="text" value={"********"} readOnly />
                  <span>Más 6 de dígitos e incluya carácteres especiales</span>
                </div>
                {/* Agregar mas inputs segun lo que podamos anadir en firebase */}
              </div>
            </div>
            <Link to={USER_PROFILE_EDIT_URL}>
              <button className="editprofile-btn">Editar perfil</button>
            </Link>
            {/* aqui poner el url de reservas de usuario */}
            <Link to={USER_PROFILE_EDIT_URL}> 
              <button className="editprofile-btn margen">Ver mis reservas</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default UserProfilePage

