import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../../firebase/users";
import styles from "./ForgotPasswordPage.module.css";
import { LOGIN_URL } from "../../../constants/urls";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
    const auth = getAuth();
    auth.languageCode = "es";

    const [email, setEmail] = useState("");
    const [canSubmit, setCanSubmit] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [disableButton, setDisableButton] = useState(false);
    const [time, setTime] = useState(5);


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
            setTime(5);
        }
    }, [disableButton, canSubmit, time]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!canSubmit || disableButton) {
            console.log(
                "Por favor, espere unos minutos antes de enviar otra solicitud."
            );
            return;
        }

        setDisableButton(true);

        try {
            const user = await getUserProfile(email);
            if (!user || user.provider !== "email") {
                setIsEmailValid(false);
                setDisableButton(false);
                return;
            }

            await sendPasswordResetEmail(auth, email);
            console.log("Correo de recuperación enviado correctamente");
            setCanSubmit(false);
        } catch (error) {
            console.error("Error al enviar el correo de recuperación", error);
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
                    <img src="public\images\logos\visuartGrayLogo.png" alt="logo" />
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
                        className={styles.submitButton}
                        type="submit"
                        disabled={!canSubmit || disableButton || email.trim() === ""}
                    >
                        Enviar correo de recuperación
                    </button>

                    {!isEmailValid && !disableButton
                        && (
                            <p className={styles.errorMessage}>
                                El correo ingresado no está asociado a ninguna cuenta.
                            </p>
                        )}

                    <div
                        className={`${styles.timer} ${canSubmit ? "" : styles.timerActive
                            }`}
                    >
                        Puedes pedir otra solicitud en {
                            " "
                        }
                        {Math.floor(time / 60)}:
                        {time % 60 < 10 ? "0" + (time % 60) : time % 60} minutos.
                    </div>
                </form>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
