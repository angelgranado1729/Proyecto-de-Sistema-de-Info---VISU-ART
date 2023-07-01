//el codigo de arriba es el codigo de beatriz viejo.
//si hay que añadir mas campos se debe agregar un estado para cada campo, un input para que el usuario pueda editar el valor
//, y luego incluye el valor en el objeto que se pasa a "updateUser"
import { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { updateUser } from "../../../firebase/users";
import Subtitle from "../../../components/Subtitle/Subtitle";
import "./EditProfilePage.css";
import { USER_PROFILE_URL } from "../../../constants/urls";
import { Link } from "react-router-dom";

const EditProfilePage = () => {
  const { user } = useUserContext();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, {
        name,
        email /*, otros campos que se quieran añadir });*/,
      });
      // Aquí se agrega la lógica para manejar el éxito de la operación
    } catch (error) {
      // Aquí se manejan los errores
    }
  };

  return (
    <div className="App-v2">
      <header className="back-header top-editprofile">
        <Link to={USER_PROFILE_URL}>
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input">
                <label>Correo</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>correo@ejemplo.com</span>
              </div>
              <div className="input">
                <label>Verifica tu correo</label>
                <input type="text" />
                <span>correo@ejemplo.com</span>
              </div>
              {/*Agregar mas inputs segun lo que podamos anadir en firebase*/}
            </div>
            <div className="column-center">
              <p></p>
            </div>
            <div className="column">
              <div className="input">
                <label>Contraseña</label>
                <input type="text" />
                <span>Más 6 de dígitos e incluya carácteres especiales</span>
              </div>
              <div className="input">
                <label>Verifica tu contraseña</label>
                <input type="text" />
                <span>Más 6 de dígitos e incluya carácteres especiales</span>
              </div>
              {/* Agregar mas inputs segun lo que podamos anadir en firebase */}
            </div>
          </div>
          <button className="editprofile-btn">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
