import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import styles from "./ResetPasswordPage.module.css";
import { LOGIN_URL } from "../../../constants/urls";
import { resetPassword } from "../../../firebase/auth";
import { useQuery } from "../../../hooks/useQuery";

export function ResetPasswordPage() {
    const IMAGE_URL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const query = useQuery();
    const oobCode = query.get("oobCode");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError(
                "La contraseña debe tener al menos 6 caracteres y contener al menos un carácter especial"
            );
            return;
        }

        try {
            await resetPassword(oobCode, password);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.logoContainer}>
                    <img src={IMAGE_URL} alt="Logo" />
                </div>

                <h1 className={styles.title}>Nueva contraseña</h1>

                <div className={styles.decorationTop}></div>

                {!success ? (
                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="***************"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="***************"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>

                        {error && <p className={styles.errorMessage}>{error}</p>}

                        <button className={styles.submitButton} type="submit">
                            Confirmar contraseña
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>Tu contraseña ha sido restablecida correctamente.</p>
                        <Link to={LOGIN_URL}>Iniciar sesión</Link>
                    </div>
                )}

                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
