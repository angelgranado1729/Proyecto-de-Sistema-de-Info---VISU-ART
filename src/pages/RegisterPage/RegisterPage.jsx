import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL } from "../../constants/urls";
import { ArrowLeft } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Facebook, Google, Envelope } from "react-bootstrap-icons";




export function RegisterPage() {
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
                <h1>Crea tu cuenta</h1>
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
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type="submit">Iniciar Sesión</Button>
                        </div>
                        <div className={styles.forgotPassword}>
                            <p>¿Olvidaste tu contraseña?</p>
                        </div>

                        <div className={styles.buttonsLogin}>
                            <div className={styles.facebookButton}>
                                <div className={styles.buttonContainer}>
                                    <button>
                                        <div className={styles.facebookIcon}>
                                            <Facebook size={43} color="#429EBD" />
                                        </div>
                                        <p>Inicia con Facebook</p>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.googleButton}>
                                <div className={styles.buttonContainer}>
                                    <button>
                                        <div className={styles.googleIcon}>
                                            <Google size={43} color="#F7AD19" />
                                        </div>
                                        <p>Inicia con Google</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
