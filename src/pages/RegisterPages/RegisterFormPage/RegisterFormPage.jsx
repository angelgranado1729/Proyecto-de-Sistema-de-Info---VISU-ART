import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

import styles from "./RegisterFormPage.module.css";
import { HOME_URL } from "../../../constants/urls";

export function RegisterFormPage() {
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
        password: false,
    });

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

    const { firstName, lastName, email, confirmEmail, confirmPassword, password, birthDate, gender } = formData;
    const { email: emailError, password: passwordError } = errors;

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

                    <div className={`${styles.inputContainer} ${emailError ? styles.errorInput : ""}`}>
                        <label htmlFor="email">
                            <span>Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={onChange}
                        />
                        {emailError && <span className={styles.errorMsg}>Por favor ingresa su correo electrónico.</span>}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmEmail">Confirmar email</label>
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

                    <div className={`${styles.passwordInput} ${passwordError ? styles.errorInputPassword : ""}`}>
                        <label htmlFor="password">Contraseña</label>
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

                        <button type="button" className={styles.passwordToggle} required onClick={handlePasswordClick}>
                            {showPassword ? <EyeSlashFill size={20} color="#00000080" /> : <EyeFill size={20} color="#00000080" />}
                        </button>
                    </div>

                    <div className={`${styles.passwordInput} ${passwordError ? styles.errorInputPassword : ""}`}>
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="***************"
                            value={confirmPassword}
                            onChange={onChange}
                            onClick={handlePasswordClick}
                            className={styles.passwordInputField}
                            required
                        />

                        <button type="button" className={styles.passwordToggle} required onClick={handlePasswordClick}>
                            {showPassword ? <EyeSlashFill size={20} color="#00000080" /> : <EyeFill size={20} color="#00000080" />}
                        </button>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="birthDate">Fecha de nacimiento</label>
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
                        <label htmlFor="gender">Género</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-gender">
                                Seleccionar género
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as="button"
                                    onSelect={() => setFormData((prevState) => ({ ...prevState, gender: "Masculino" }))}
                                >
                                    Masculino
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    onSelect={() => setFormData((prevState) => ({ ...prevState, gender: "Femenino" }))}
                                >
                                    Femenino
                                </Dropdown.Item>
                                <Dropdown.Item as="button" onSelect={() => setFormData((prevState) => ({ ...prevState, gender: "Otro" }))}>
                                    Otro
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <button type="submit">Registrarse</button>
                </form>
                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
