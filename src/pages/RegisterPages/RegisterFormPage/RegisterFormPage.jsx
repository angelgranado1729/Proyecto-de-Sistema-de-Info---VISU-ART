import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import styles from "./RegisterFormPage.module.css";
import { HOME_URL } from "../../../constants/urls";

export function RegisterFormPage() {
    const imageURL = 'https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39';
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        confirmPassword: "",
        password: "",
        birthDate: "",
        gender: "",
    });

    const [errors, setErrors] = useState({
        email: false,
        confirmEmail: false,
        password: false,
        confirmPassword: false,
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return passwordRegex.test(password);
    };

    const validateForm = () => {
        const {
            email,
            confirmEmail,
            password,
            confirmPassword,
        } = formData;

        const emailValid = validateEmail(email);
        const confirmEmailValid = validateEmail(confirmEmail);
        const passwordValid = validatePassword(password);
        const confirmPasswordValid = validatePassword(confirmPassword);

        setErrors({
            email: !emailValid,
            confirmEmail: !confirmEmailValid,
            password: !passwordValid,
            confirmPassword: !confirmPasswordValid,
        });

        return (
            emailValid &&
            confirmEmailValid &&
            passwordValid &&
            confirmPasswordValid
        );
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            navigate("/success");
        }
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handlePasswordClick = () => {
        setShowPassword(!showPassword);
    };

    const {
        firstName,
        lastName,
        email,
        confirmEmail,
        confirmPassword,
        password,
        birthDate,
        gender,
    } = formData;

    const {
        email: emailError,
        confirmEmail: confirmEmailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
    } = errors;

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={HOME_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.logoContainer}>
                <img src={imageURL} />
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
                            value={firstName}
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
                            value={lastName}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">
                            <span>Correo electrónico</span>
                        </label>

                        <div
                            className={`${styles.inputField} ${emailError ? styles.inputError : ""
                                }`}
                        >
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="correo@ejemplo.com"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <span className={styles.textEx}>
                            correo@ejemplo.com
                        </span>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmEmail">
                            <span>Verifica tu correo</span>
                        </label>
                        <div className={styles.inputField}>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                placeholder="correo@ejemplo.com"
                                value={confirmEmail}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <span className={styles.textEx}>
                            correo@ejemplo.com
                        </span>
                    </div>

                    <div
                        className={styles.inputContainer}
                    >
                        <label htmlFor="password">
                            <span>Contraseña</span>
                        </label>
                        <div
                            className={`${styles.passwordInput} ${errors.password ? styles.errorInputPassword : ""}`}
                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="***************"
                                value={password}
                                onChange={onChange}
                                onClick={handlePasswordClick}
                                className={styles.passwordInputField}
                                required
                            />

                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={handlePasswordClick}
                            >
                                {showPassword ? (
                                    <EyeSlashFill size={20} color="#00000080" />
                                ) : (
                                    <EyeFill size={20} color="#00000080" />
                                )}
                            </button>
                        </div>

                        <span className={styles.textEx}>
                            La contraseña debe tener al menos 6 caracteres y contener al
                            menos un carácter especial.
                        </span>

                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">
                            <span>Verifica tu contraseña</span>
                        </label>
                        <div
                            className={`${styles.passwordInput} ${errors.password ? styles.errorInputPassword : ""}`}
                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="***************"
                                value={confirmPassword}
                                onChange={onChange}
                                onClick={handlePasswordClick}
                                className={styles.passwordInputField}
                                required
                            />

                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={handlePasswordClick}
                            >
                                {showPassword ? (
                                    <EyeSlashFill size={20} color="#00000080" />
                                ) : (
                                    <EyeFill size={20} color="#00000080" />
                                )}
                            </button>
                        </div>


                        <span className={styles.textEx}>
                            La contraseña debe tener al menos 6 caracteres y contener al
                            menos un carácter especial.
                        </span>

                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="birthDate">
                            <span>Fecha de nacimiento</span>
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            placeholder="dd/mm/aaaa"
                            value={birthDate}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="gender">
                            <span>Género</span>
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleccionar</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.registerButton}>
                        Registrarse
                    </button>
                </form>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
