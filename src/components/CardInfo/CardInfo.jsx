import React from "react";
import styles from "./CardInfo.module.css";
import { TOUR_DETAILS_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

export function CardInfo(props) {
    const obraTitle = props.obraTitle;
    const obraLocation = props.obraLocation;
    const obraAuthor = props.obraAuthor;
    const obraImage = props.obraImage;
    const obraYear = props.obraYear;
    const obraDimensions = props.obraDimensions;
    const obraTechnique = props.obraTechnique;

    return (
        <div className={styles["container-cards"]}>
            <div className={styles["card-wrapper"]}>
                <div className={styles["card-cover"]}>
                    <img src={obraImage} alt="" />
                    <div className={styles["img-back"]}></div>
                </div>
                <div className={styles["card-description"]}>
                    <h2 className={styles["tour-title"]}>{obraTitle}</h2>
                    <p className={styles["tour-location"]}>
                        <i className={styles["fa-solid fa-location-dot"]}>
                        </i><strong>Ubicación:</strong> {obraLocation}
                    </p>
                    <p className={styles["tour-location"]}>
                        <i className={styles["fa-solid fa-location-dot"]}>
                        </i><strong>Autor:</strong> {obraAuthor}
                    </p>

                    <p className={styles["tour-location"]}>
                        <i className={styles["fa-solid fa-location-dot"]}>
                        </i><strong>Año:</strong> {obraYear}
                    </p>

                    <p className={styles["tour-location"]}>
                        <i className={styles["fa-solid fa-location-dot"]}>
                        </i><strong>Dimensiones:</strong> {obraDimensions}
                    </p>

                    <p className={styles["tour-location"]}>
                        <i className={styles["fa-solid fa-location-dot"]}>
                        </i><strong>Técnica:</strong> {obraTechnique}
                    </p>

                </div>
            </div>
        </div>
    );
}
