import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <div className="footer">
            <div className = "sb__footer section">
                <div className = "sb__footer-links">
                    <div className = "sb__footer-links_div">
                        <img src="/images/logos/visuartOrangeLogo.jpg" alt="" />
                    </div>
                    <div className = "sb__footer-links_div">
                        <div className= "sb__footer-below-links">
                        <Link to="/mision"><div><p>Misión</p></div></Link>
                        <Link to="/vision"><div><p>Visión</p></div></Link>
                        <Link to="/objetivos"><div><p>Objetivos</p></div></Link>
                        <Link to="/contacto"><div><p>Contacto</p></div></Link>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className ="sb__footer-copyright">
                        <p>©{new Date().getFullYear()} VisuArt. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;