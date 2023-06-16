import React from "react";
import "./Sidebar.css";
import  {SiderbarData} from './SidebarData'


const Sidebar=()=>{



    return(
        <div className="container-12">
            <div className="menu-hamburger" >
                    <i className ="fa-solid fa-bars"></i>
            </div>
        <div className="sidebar">
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