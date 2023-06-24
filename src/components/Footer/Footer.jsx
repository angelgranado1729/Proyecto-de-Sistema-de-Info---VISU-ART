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
                        <img className="footer-logo" src="/images/logos/visuartOrangeLogo.jpg" alt="" />
                        <img className="footer-smalllogo" src="/images/logos/visuartSmallOrangeLogo.jpg" alt="" />
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