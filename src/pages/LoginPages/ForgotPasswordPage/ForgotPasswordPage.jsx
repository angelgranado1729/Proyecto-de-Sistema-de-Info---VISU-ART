import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { getUserProfileEmailProvider } from "../../../firebase/users";
import styles from "./ForgotPasswordPage.module.css";
import { LOGIN_URL } from "../../../constants/urls";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../firebase/auth";
import { CustomToast } from "../../../components/CustomToast/CustomToast";

export function ForgotPasswordPage() {
    const imageURL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const [email, setEmail] = useState("");
    const [canSubmit, setCanSubmit] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [time, setTime] = useState(60);
    const auth = getAuth();
    auth.languageCode = "es";

    useEffect(() => {
        if (!canSubmit && time > 0) {
            const timer = setTimeout(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        } else if (time === 0 && !canSubmit) {
            setCanSubmit(true);
            setDisableButton(false);
            setIsEmailValid(true);
            setTime(60);
        }
    }, [disableButton, canSubmit, time]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setShowToast(false);
        setDisableButton(true);
        try {
            const user = await getUserProfileEmailProvider(email);

            if (!user || user.provider !== "email") {
                setIsEmailValid(false);
                setDisableButton(false);
                setShowToast(true);
                return
            }

            await forgotPassword(email);
            setCanSubmit(false);
            setIsEmailValid(true);
            setShowToast(true);
        } catch (error) {
            console.error("Error al enviar el correo de recuperación", error);
            setIsEmailValid(false);
            setDisableButton(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={LOGIN_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.logoContainer}>
                    <img src={imageURL} alt="Logo" />
                </div>

                <h1 className={styles.title}>Recuperar contraseña</h1>

                <div className={styles.decorationTop}></div>

                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="email">
                            <span>Ingrese el correo electrónico</span>
                        </label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className={`${styles.submitButton} ${disableButton ? styles.disabled : styles.enable
                            }`}
                        type="submit"
                        disabled={!canSubmit || disableButton || email.trim() === ""}
                    >
                        Enviar correo de recuperación
                    </button>

                    <div className={`${styles.timer} ${canSubmit ? "" : styles.timerActive}`}>
                        Puedes pedir otra solicitud en {Math.floor(time / 60)}:
                        {time % 60 < 10 ? "0" + (time % 60) : time % 60} minutos.
                    </div>
                </form>
                <div className={styles.decorationBottom}></div>
            </div>

            {showToast && !disableButton && !isEmailValid && (
                <CustomToast
                    typeToast="error"
                    title="Error"
                    message="El correo ingresado no está asociado a ninguna cuenta."
                    time={5000}
                />
            )}

            {showToast && disableButton && isEmailValid && (
                <CustomToast
                    typeToast="success"
                    title="Correo enviado"
                    message="Se ha enviado un correo de recuperación a su cuenta."
                    time={5000}
                />
            )}
        </div>
    );
}
