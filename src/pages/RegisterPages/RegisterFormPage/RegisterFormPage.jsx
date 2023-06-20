import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import styles from "./RegisterFormPage.module.css";
import { HOME_URL } from "../../../constants/urls";

export function RegisterFormPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmPassword: "",
        password: "",
        birthDate: "",
        gender: ""
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false
    });

    const [loginError, setLoginError] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        // Realizar validaciones y enviar los datos al backend
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handlePasswordClick = () => {
        setShowPassword(!showPassword);
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

            <div className={styles.formContainer}>
                <h1 className={styles.title}>¡Cuéntanos sobre ti!</h1>
                <div className={styles.decorationTop}></div>

                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="firstName">Nombre</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Nombre"
                            value={formData.firstName}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="lastName">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Apellido"
                            value={formData.lastName}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div
                        className={`${styles.inputContainer} ${errors.email ? styles.errorInput : ""
                            }`}
                    >
                        <label htmlFor="email">
                            <span>Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={onChange}
                        />
                        {errors.email && (
                            <span className={styles.errorMsg}>
                                Por favor ingresa su correo electrónico.
                            </span>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmEmail">Confirmar email</label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            placeholder="correo@ejemplo.com"
                            value={formData.confirmEmail}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div
                        className={`${styles.passwordInput} ${errors.password ? styles.errorInputPassword : ""
                            }`}
                    >
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="***************"
                            value={formData.password}
                            onChange={onChange}
                            onClick={handlePasswordClick}
                            className={styles.passwordInputField}
                            required
                        />

                        <button
                            type="button"
                            className={styles.passwordToggle}
                            required
                            onClick={handlePasswordClick}
                        >
                            {showPassword ? (
                                <EyeSlashFill size={20} color="background: #00000080" />
                            ) : (
                                <EyeFill size={20} color="#00000080" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <span className={styles.errorMsg}>
                            Por favor ingresa su contraseña.
                        </span>
                    )}

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="***************"
                            value={formData.confirmPassword}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="birthDate">Fecha de nacimiento</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            placeholder="dd/mm/aaaa"
                            value={formData.birthDate}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="gender">Género</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={onChange}
                        />
                    </div>

                    <button type="submit">Registrarse</button>
                </form>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
