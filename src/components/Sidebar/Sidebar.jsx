import React from "react";
import "./Sidebar.css";
import  {SiderbarData} from './SidebarData'
import { useState } from "react";


const Sidebar=()=>{

    const [openSidebar, setOpenSidebar] = useState(false);
    
    const handleOpenSidebar =() =>{
        setOpenSidebar(!openSidebar);
    }
    
    return(
        <div className="container-12">
            <button className={openSidebar === false ? "settings": "inactive"} onClick={handleOpenSidebar}>
                 <i className ="fas fa-bars"></i>
            </button>
        <div className={openSidebar === false ? "sidebar": "sidebar actived"}>
            <button className="settings" onClick={handleOpenSidebar}>
                    <i className ="fas fa-times icon"></i>
                </button>
            <div className="admin-profile">
                <div className="img">
                </div>
                <p className="welcome-text">Bienvenido Nombre!</p>
                <p className="introduction-text">Desde este perfil podrás gestionar los datos de la página web VisuArt</p>
            </div>
            <ul className="sidebar-links">
                {SiderbarData.map((val, key)=>{
                    return(
                        <li className="link" key={key} onClick={()=> {window.location.pathname = val.link}}>
                            {" "}
                            <div className="icon">
                            <i className={val.icon}></i> 
                            </div>
                            <div className="title">
                                {val.title}
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
            <ul className="admin-settings">
                <li className="link">
                    Editar Perfil
                </li>
                <li className="link">
                    Salir de Admistrador
                </li>
                <li className="link">
                    Cerrar Sesión
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar;