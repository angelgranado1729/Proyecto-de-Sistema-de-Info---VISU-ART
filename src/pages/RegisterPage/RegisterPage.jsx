import 'firebase/firestore';
import styles from "./RegisterPage.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOME_URL, REGISTER_FORM_URL } from "../../constants/urls";
import {
    loginWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/auth";
import {
    ArrowLeft,
    Google,
    Facebook,
    EnvelopeFill,
} from "react-bootstrap-icons";



export function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const [loginError, setLoginError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSuccess = () => {
        navigate(HOME_URL);
    };

    const onFail = (_error) => {
        setLoginError(true);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        setLoginError(false);
        await loginWithEmailAndPassword({
            userData: formData,
            onSuccess,
            onFail,
        });
    };

    const handleGoogleClick = async () => {
        await signInWithGoogle({
            onSuccess: () => navigate(HOME_URL),
        });
    };

    const handleFacebookClick = async () => {
        // await signInWithGoogle({
        //     onSuccess: () => navigate(HOME_URL),
        // });
    };


    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={HOME_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.logoContainer}>
                <img src="public\images\logos\visuartGrayLogo.png" alt="logo" />
            </div>
            <div className={styles.mainContainer}>
                <h1 className={styles.title}>Crea tu cuenta</h1>
                <div className={styles.decorationTop}></div>

                {/* Facebook Google Buttons */}
                <div className={styles.buttonsLoginContainer}>
                    <button
                        type="button"
                        className={styles.facebookButton}
                        onClick={handleFacebookClick}
                    >
                        <span className={styles.facebookIcon}>
                            <Facebook size={40} color="#429EBD" />
                        </span>
                        <p>Inicia con Facebook</p>
                    </button>
                    <button
                        type="button"
                        className={styles.googleButton}
                        onClick={handleGoogleClick}
                    >
                        <span className={styles.googleIcon}>
                            <Google size={40} color="#F7AD19" />
                        </span>
                        <p>Inicia con Google</p>
                    </button>
                    <button
                        type="button"
                        className={styles.emailButton}
                        onClick={() => navigate(REGISTER_FORM_URL)}
                    >
                        <span className={styles.emailIcon}>
                            <EnvelopeFill size={40} color="#1A3E5A" />
                        </span>
                        <p>Ingresa con tu correo</p>
                    </button>
                </div>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
