import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { HOME_URL, REGISTER_URL } from "../../constants/urls";
import { Button } from "react-bootstrap";
import { Facebook, Google, ArrowLeft } from "react-bootstrap-icons";

export function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={HOME_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.logoContainer}>
                <img src="https://i.imgur.com/2nY3dJp.png" alt="logo" />
            </div>
            <div className={styles.loginTitle}>
                <h1>Bienvenido de nuevo</h1>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.decorationTop}></div>

                <div className={styles.loginContainer}>
                    <form className={styles.loginForm}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                />
                                <div
                                    className={styles.passwordToggle}
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <i className="bi bi-eye-slash-fill"></i>
                                    ) : (
                                        <i className="bi bi-eye-fill"></i>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type="submit">Iniciar Sesión</Button>
                        </div>
                    </form>

                    <div className={styles.forgotPassword}>
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                    <div className={styles.buttonsLogin}>
                        <div className={styles.facebookButton}>
                            <button>
                                <div className={styles.facebookIcon}>
                                    <Facebook size={35} color="#429EBD" />
                                </div>
                                Inicia con Facebook
                            </button>
                        </div>

                        <div className={styles.googleButton}>
                            <button>
                                <div className={styles.googleIcon}>
                                    <Google size={35} color="#F7AD19" />
                                </div>
                                Inicia con Google
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.decorationBottom}></div>
            </div>
            <div className={styles.registerContainer}>
                <p>¿No tienes cuenta?</p>
                <div className={styles.registerLink}>
                    <Link to={REGISTER_URL}>
                        <p>Regístrate aquí</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
