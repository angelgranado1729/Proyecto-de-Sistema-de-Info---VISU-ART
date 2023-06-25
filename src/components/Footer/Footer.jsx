import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CONTACT_URL, MISION_URL, OBJECTIVES_URL, VISION_URL } from "../../constants/urls";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section">
                <div className="footer-links">
                    <div className="footer-links_div-img">
                        <img className="footer-logo" src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartOrangeLogo.jpg?alt=media&token=068565b4-da94-4d3e-9841-030bc2ffd6c6" alt="" />
                        <img className="footer-smalllogo" src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartSmallOrangeLogo.jpg?alt=media&token=637c775a-a971-45f6-a7b3-26058a9f2bb8" alt="" />
                    </div>
                    <div className="footer-links_div">
                        <div className="footer-below-links">
                            <Link className="below-links" to={MISION_URL}><div><p>Misión</p></div></Link>
                            <Link className="below-links" to={VISION_URL}><div><p>Visión</p></div></Link>
                            <Link className="below-links" to={OBJECTIVES_URL}><div><p>Objetivos</p></div></Link>
                            <Link className="below-links" to={CONTACT_URL}><div><p>Contacto</p></div></Link>
                        </div>
                    </div>
                </div>
                <hr className="footer-separator"></hr>
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>©{new Date().getFullYear()} VisuArt. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;