import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import styles from "./RegisterFormPage.module.css";
import { HOME_URL } from "../../../constants/urls";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { CustomToast } from "../../../components/CustomToast/CustomToast";
import "react-datepicker/dist/react-datepicker.css";
import { getUserProfileEmailProvider } from "../../../firebase/users";

export function RegisterFormPage() {
    const imageURL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const [showPassword_1, setShowPassword_1] = useState(false);
    const [showPassword_2, setShowPassword_2] = useState(false);
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

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return passwordRegex.test(password);
    };

    const handleDateChange = (date) => {
        setFormData((prevState) => ({ ...prevState, birthDate: date }));
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

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const [showToast, setShowToast] = useState(false);
    const [typeToast, setTypeToast] = useState("");
    const [messageToast, setMessageToast] = useState("");
    const [titleToast, setTitleToast] = useState("");

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

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            setShowToast(true);
            setTypeToast("error");
            setTitleToast("Error");
            setMessageToast("Por favor, ingresa un correo válido.");
            return false;
        }

        const user = getUserProfileEmailProvider(email);
        if (user) {
            setShowToast(true);
            setTypeToast("error");
            setTitleToast("Error");
            setMessageToast("El correo ya está registrado");
            return false;
        }
        return true;
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            setShowToast(true);
            setTypeToast("error");
            setTitleToast("Error");
            setMessageToast("Por favor, revisa los campos.");
            return;
        }
        else {
            setShowToast(true);
            setTypeToast("success");
            setTitleToast("¡Registro exitoso!");
            setMessageToast("Bienvenido a Visuart");
            navigate(HOME_URL);
        }
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

            {showToast && (
                <CustomToast
                    typeToast={typeToast}
                    title={titleToast}
                    message={messageToast}
                    time={5000}
                />
            )}

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
                            value={lastName}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">
                            <span>Correo</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                        {emailError && (
                            <span className={styles.errorText}>
                                Por favor, ingresa un correo válido.
                            </span>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmEmail">
                            <span>Verifica tu correo</span>
                        </label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={confirmEmail}
                            onChange={onChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                        {confirmEmailError && (
                            <span className={styles.errorText}>
                                Por favor, ingresa un correo válido.
                            </span>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Contraseña</label>
                        <div
                            className={`${styles.passwordInput} ${passwordError ? styles.errorInputPassword : ""
                                }`}
                        >
                            <input
                                type={showPassword_1 ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="***************"
                                value={password}
                                onChange={onChange}
                                className={styles.passwordInputField}
                                required
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => setShowPassword_1(!showPassword_1)}
                            >
                                {showPassword_1 ? (
                                    <EyeSlashFill size={20} color="#00000080" />
                                ) : (
                                    <EyeFill size={20} color="#00000080" />
                                )}
                            </button>
                        </div>
                        <span className={styles.textEx}>
                            Más de 6 dígitos e incluya caracteres especiales (@#.!)
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
                                type={showPassword_2 ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="***************"
                                value={confirmPassword}
                                onChange={onChange}
                                className={styles.passwordInputField}
                                required
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => setShowPassword_2(!showPassword_2)}
                            >
                                {showPassword_2 ? (
                                    <EyeSlashFill size={20} color="#00000080" />
                                ) : (
                                    <EyeFill size={20} color="#00000080" />
                                )}
                            </button>
                        </div>
                        <span className={styles.textEx}>
                            Más de 6 dígitos e incluya caracteres especiales (@#.!)
                        </span>
                        {confirmPasswordError && (
                            <span className={styles.errorText}>
                                La contraseña debe tener al menos 6 caracteres y contener al
                                menos un carácter especial.
                            </span>
                        )}
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="birthDate">Fecha de nacimiento</label>

                        <div className={styles.dateContainer}>
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
                                yearDropdownItemNumber={110}
                                maxDate={new Date()}
                            />
                        </div>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="gender">Género</label>
                        <Form.Control
                            className={styles.select}
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