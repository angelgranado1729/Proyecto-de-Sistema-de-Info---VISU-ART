import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <div className="footer">
            <div className = "sb__footer section">
                <div className = "footer-links">
                    <div className = "footer-links_div-img">
                        <img className= "footer-logo" src="/images/logos/visuartOrangeLogo.jpg" alt="" />
                        <img className="footer-smalllogo" src="/images/logos/visuartSmallOrangeLogo.jpg" alt="" />
                    </div>
                    <div className = "footer-links_div">
                        <div className= "footer-below-links">
                        <Link to="/mision"><div><p>Misión</p></div></Link>
                        <Link to="/vision"><div><p>Visión</p></div></Link>
                        <Link to="/objetivos"><div><p>Objetivos</p></div></Link>
                        <Link to="/contact"><div><p>Contacto</p></div></Link>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-below">
                    <div className ="footer-copyright">
                        <p>©{new Date().getFullYear()} VisuArt. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;