import Subtitle from "../../components/Subtitle/Subtitle";
import "./EditProfilePage.css"


const EditProfilePage = () => {
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
                <Subtitle subtitle="Edita tus datos:"/>
                <div className="input-container">
                    <div className="column">
                        <div className="input">
                            <label>Nombre</label>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <label>Correo</label>
                            <input type="text"/>
                            <span>correo@ejemplo.com</span>
                        </div>
                        <div className="input">
                            <label>Contraseña</label>
                            <input type="text"/>
                            <span>Más 6 de dígitos e incluya carácteres especiales</span>
                        </div>
                        
                    </div>
                    <div className="column"><p></p></div>
                    <div className="column">
                        <div className="input">
                            <label>Apellido</label>
                            <input type="text"/>
                        </div>
                        <div className="input">
                            <label>Verifica tu correo</label>
                            <input type="text"/>
                            <span>correo@ejemplo.com</span>
                        </div>
                        <div className="input">
                            <label>Verifica tu contraseña</label>
                            <input type="text"/>
                            <span>Más 6 de dígitos e incluya carácteres especiales</span>
                        </div> 
                    </div>
                </div>
                <button className="blue-btn">Guardar Cambios</button>
            </div>  
      </div>
    )
}

export default EditProfilePage