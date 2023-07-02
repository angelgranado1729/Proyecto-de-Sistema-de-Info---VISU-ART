import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, checkActionCode } from "firebase/auth";
import styles from "./ResetPasswordPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../../constants/urls";
import { resetPassword } from "../../../firebase/auth";
import { useQuery } from "../../../hooks/useQuery";
import { Loading } from "../../../components/Loading/Loading";
import { CustomToast } from "../../../components/CustomToast/CustomToast";

export function ResetPasswordPage() {
    const IMAGE_URL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const auth = getAuth();
    const query = useQuery();
    const oobCode = query.get("oobCode");

    const [validLink, setValidLink] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [infoToast, setInfoToast] = useState({
        typeToast: "",
        title: "",
        message: "",
        time: 0,
    });
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        const verifyLink = async () => {
            if (!oobCode) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                await checkActionCode(auth, oobCode);
                setValidLink(true);
            } catch (error) {
                setValidLink(false);
            } finally {
                setLoading(false);
            }
        };

        verifyLink();
    }, [auth, oobCode]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const verifyPassword = () => {
        if (password !== confirmPassword) {
            setInfoToast({
                typeToast: "error",
                title: "¡Error!",
                message: "Las contraseñas no coinciden.",
                time: 3000,
            });
            setToastMessage("Las contraseñas no coinciden.");
            setShowToast(true);
            return false;
        }
        if (password.length < 6 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setInfoToast({
                typeToast: "error",
                title: "¡Error!",
                message:
                    "La contraseña debe tener al menos 6 caracteres y un caracter especial.",
                time: 3000,
            });
            setToastMessage(
                "La contraseña debe tener al menos 6 caracteres y un caracter especial."
            );
            setShowToast(true);
            return false;
        }

        setShowToast(false);
        return true;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!verifyPassword()) {
            return;
        }

        setShowToast(false);

        try {
            await resetPassword(oobCode, password);
            const message = "Tu contraseña ha sido restablecida correctamente.";
            setInfoToast({
                typeToast: "success",
                title: "¡Contraseña restablecida!",
                message: message,
                time: 3000,
            });
            setToastMessage(message);
            setShowToast(true);
            setTimeout(() => {
                window.location.href = LOGIN_URL;
            }, 3000);

        } catch (error) {
            const message = "Ha ocurrido un error al restablecer la contraseña.";
            setInfoToast({
                typeToast: "error",
                title: "¡Error!",
                message: message,
                time: 3000,
            });
            setToastMessage(message);
            console.log(error);
            setShowToast(true);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    if (!oobCode || !validLink) {
        return <Navigate to={HOME_URL} />;
    }

    const handleClick = () => {
        setShowToast(false);
        console.log(toastMessage);
    };

    return (
        <div className={styles.container}>
            {showToast && (
                <div className={styles.toastContainer}>
                    <CustomToast
                        typeToast={infoToast.typeToast}
                        title={infoToast.title}
                        message={toastMessage}
                        time={infoToast.time}
                    />
                </div>
            )}

            <div className={styles.formContainer}>
                <div className={styles.logoContainer}>
                    <img src={IMAGE_URL} alt="Logo" />
                </div>

                <h1 className={styles.title}>Nueva contraseña</h1>

                <div className={styles.decorationTop}></div>

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
                    <button
                        className={styles.submitButton}
                        type="submit"
                        onClick={handleClick}
                    >
                        Confirmar contraseña
                    </button>
                </form>

                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
