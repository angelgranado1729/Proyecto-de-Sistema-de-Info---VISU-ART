import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import styles from "./RegisterFormPage.module.css";
import { HOME_URL } from "../../../constants/urls";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function RegisterFormPage() {
    const imageURL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        confirmPassword: "",
        password: "",
        birthDate: null,
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
        const { email, confirmEmail, password, confirmPassword } = formData;

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

    const handleDateChange = (date) => {
        setFormData((prevState) => ({ ...prevState, birthDate: date }));
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

    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link to={HOME_URL}>
                    <ArrowLeft size={40} color="#000000" />
                </Link>
            </div>

            <div className={styles.logoContainer}>
                <img src={imageURL} alt="Logo" />
            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.title}>¡Cuéntanos sobre ti!</h1>
                <div className={styles.decorationTop}></div>

                <Form className={styles.form} onSubmit={onSubmit}>
                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="firstName">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="lastName">Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={onChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="email">Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={onChange}
                            required
                        />
                        {errors.email && (
                            <Form.Text className="text-danger">
                                Ingresa un correo electrónico válido.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="confirmEmail">
                            Verifica tu correo
                        </Form.Label>
                        <Form.Control
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            placeholder="correo@ejemplo.com"
                            value={confirmEmail}
                            onChange={onChange}
                            required
                        />
                        {errors.confirmEmail && (
                            <Form.Text className="text-danger">
                                Ingresa un correo electrónico válido.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Contraseña</label>
                        <div
                            className={`${styles.passwordInput} ${passwordError ? styles.errorInputPassword : ""
                                }`}
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
                            Más de 6 dígitos e incluya caractéres especiales (@#.!)
                        </span>
                        {passwordError && (
                            <span className={styles.errorText}>
                                La contraseña debe tener al menos 6 caracteres y contener al
                                menos un carácter especial.
                            </span>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">Verifica tu contraseña</label>
                        <div
                            className={`${styles.passwordInput} ${confirmPasswordError ? styles.errorInputPassword : ""
                                }`}
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
                            Más de 6 dígitos e incluya caractéres especiales (@#.!)
                        </span>
                        {confirmPasswordError && (
                            <span className={styles.errorText}>
                                La contraseña debe tener al menos 6 caracteres y contener al
                                menos un carácter especial.
                            </span>
                        )}
                    </div>


                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="birthDate">Fecha de nacimiento</Form.Label>
                        <DatePicker
                            id="birthDate"
                            name="birthDate"
                            selected={birthDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Selecciona una fecha"
                            className={styles.datePicker}
                            required
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            maxDate={new Date()}
                        />
                    </Form.Group>

                    <Form.Group className={styles.inputContainer}>
                        <Form.Label htmlFor="gender">Género</Form.Label>
                        <Form.Control
                            as="select"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={onChange}
                            required
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="other">Otro</option>
                        </Form.Control>
                    </Form.Group>

                    <button type="submit" className={styles.registerButton}>
                        Registrarse
                    </button>
                </Form>

                <div className={styles.decorationBottom}></div>
            </div>
        </div>
    );
}
