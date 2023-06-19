// import Subtitle from "../../components/Subtitle/Subtitle";
// import "./EditProfilePage.css"


// const EditProfilePage = () => {
//     return (
//         <div className="App-v2">
//             <header className="back-header">
//             <i className="fa-solid fa-arrow-left"></i>
//             <img src="public/images/logos/visuartBlueLogo.jpg" alt="" />
//             </header>

//             <div className="editprofile-container">
//             <div className="decoration up-container"></div>
//             <div className="decoration down-container"></div>
//                 <div className="profile-img"></div>
//                 <i className="fa-solid fa-pen-to-square"></i>
//                 <Subtitle subtitle="Edita tus datos:"/>
//                 <div className="input-container">
//                     <div className="column">
//                         <div className="input">
//                             <label>Nombre</label>
//                             <input type="text"/>
//                         </div>
//                         <div className="input">
//                             <label>Correo</label>
//                             <input type="text"/>
//                             <span>correo@ejemplo.com</span>
//                         </div>
//                         <div className="input">
//                             <label>Contraseña</label>
//                             <input type="text"/>
//                             <span>Más 6 de dígitos e incluya carácteres especiales</span>
//                         </div>

//                     </div>
//                     <div className="column"><p></p></div>
//                     <div className="column">
//                         <div className="input">
//                             <label>Apellido</label>
//                             <input type="text"/>
//                         </div>
//                         <div className="input">
//                             <label>Verifica tu correo</label>
//                             <input type="text"/>
//                             <span>correo@ejemplo.com</span>
//                         </div>
//                         <div className="input">
//                             <label>Verifica tu contraseña</label>
//                             <input type="text"/>
//                             <span>Más 6 de dígitos e incluya carácteres especiales</span>
//                         </div> 
//                     </div>
//                 </div>
//                 <button className="blue-btn">Guardar Cambios</button>
//             </div>  
//       </div>
//     )
// }

// export default EditProfilePage


//el codigo de arriba es el codigo de beatriz viejo. 
//si hay que añadir mas campos se debe agregar un estado para cada campo, un input para que el usuario pueda editar el valor
//, y luego incluye el valor en el objeto que se pasa a "updateUser"
import React, { useState } from 'react';
import { useUserContext } from "../../../contexts/UserContext";
import { updateUser } from "../../../firebase/users";
import Subtitle from "../../../components/Subtitle/Subtitle";
import "./EditProfilePage.css"

const EditProfilePage = () => {
    const { user } = useUserContext();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(user.id, { name, email /*, otros campos que se quieran añadir */ });
            // Aquí se agrega la lógica para manejar el éxito de la operación
        } catch (error) {
            // Aquí se manejan los errores
        }
    };

    return (
        <div className="App-v2">
            <header className="back-header">
                <i className="fa-solid fa-arrow-left"></i>
                <img src="public/images/logos/visuartBlueLogo.jpg" alt="" />
            </header>
            <div className="editprofile-container">
                <div className="decoration up-container"></div>
                <div className="decoration down-container"></div>
                <div className="profile-img"></div>
                <i className="fa-solid fa-pen-to-square"></i>
                <Subtitle subtitle="Edita tus datos:" />
                <div className="input-container">
                    <div className="column">
                        <div className="input">
                            <label>Nombre</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input">
                            <label>Correo</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>correo@ejemplo.com</span>
                        </div>
                        {/*Agregar mas inputs segun lo que podamos anadir en firebase  */}
                    </div>
                    <div className="column"><p></p></div>
                    <div className="column">
                        {/* Agregar mas inputs segun lo que podamos anadir en firebase */}
                    </div>
                </div>
                <button className="blue-btn" onClick={handleSubmit}>Guardar Cambios</button>
            </div>
        </div>
    )
}

export default EditProfilePage
