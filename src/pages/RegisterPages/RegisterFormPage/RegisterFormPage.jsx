import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import styles from "./RegisterFormPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../../constants/urls";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { CustomToast } from "../../../components/CustomToast/CustomToast";
import "react-datepicker/dist/react-datepicker.css";
import { validateEmailFunction } from "../../../firebase/users";
import { registerWithEmailAndPassword } from "../../../firebase/auth";
import { format } from "date-fns";


export function RegisterFormPage() {
    const imageURL =
        "https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartGrayLogo.png?alt=media&token=bbebf007-b27c-47dc-a494-5b31663b7a39";
    const [showPassword_1, setShowPassword_1] = useState(false);
    const [showPassword_2, setShowPassword_2] = useState(false);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [infoToast, setInfoToast] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        confirmPassword: "",
        password: "",
        birthDate: new Date(),
        gender: "",
    });

    const handleDateChange = (date) => {
        setFormData((prevState) => ({ ...prevState, birthDate: date }));
    };


    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


    const validateForm = async () => {

        const emailValid = await validateEmail(formData.email);

        if (formData.email !== formData.confirmEmail) {
            setInfoToast({
                typeToast: "error",
                title: "Error!",
                message: "Los correos no coinciden.",
                time: 5000,
            });
            setShowToast(true);
            return false;
        }

        if (!emailValid) {
            setInfoToast({
                typeToast: "error",
                title: "Error!",
                message: "Ya existe un usuario asociado a ese correo.",
                time: 5000,
            });
            setShowToast(true);
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setInfoToast({
                typeToast: "error",
                title: "Error!",
                message: "Las contraseñas no coinciden.",
                time: 5000,
            });
            setShowToast(true);
            return false;
        }

        if (!validatePassword(formData.password)) {
            setInfoToast({
                typeToast: "error",
                title: "Error!",
                message: "La contraseña debe tener al menos 6 caracteres, una letra y un caracter especial.",
                time: 5000,
            });
            setShowToast(true);
            return false;
        }

        return true;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return passwordRegex.test(password);
    };

    const onSuccess = () => {
        console.log("REGISTER SUCCESS");
        navigate(HOME_URL);
    };

    const onFail = (error) => {
        console.log("REGISTER FAILED, Try Again");
        console.log(error);
    };


    const onSubmit = async (event) => {
        setShowToast(false);
        event.preventDefault();
        const isValid = await validateForm();

        if (!isValid) {
            console.log("Form is not valid");
            return;
        }

        const formattedDate = format(formData.birthDate, "dd/MM/yyyy");

        await registerWithEmailAndPassword({
            userData: {
                ...formData,
                birthDate: formattedDate,
            },
            onSuccess,
            onFail,
        });

    };


    const validateEmail = async (email) => {
        const user = await validateEmailFunction(email);
        if (user) {
            return false;
        }
        return true;
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

            <div className={styles.toastsContainer}>
                {showToast && (
                    <CustomToast
                        typeToast={infoToast.typeToast}
                        title={infoToast.title}
                        message={infoToast.message}
                        time={infoToast.time}
                    />)
                }
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
                            value={formData.firstName}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div
                        className={styles.inputContainer}
                    >
                        <label htmlFor="lastName">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
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
                            value={formData.email}
                            onChange={onChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmEmail">
                            <span>Verifica tu correo</span>
                        </label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={onChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Contraseña</label>
                        <div className={styles.passwordInput}>
                            <input
                                type={showPassword_1 ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="***************"
                                value={formData.password}
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
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">Verifica tu contraseña</label>
                        <div className={styles.passwordInput}>
                            <input
                                type={showPassword_2 ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="***************"
                                value={formData.confirmPassword}
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
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="birthDate">Fecha de nacimiento</label>
                        <div
                            className={`${styles.datePickerContainer} ${styles.customDatePicker}`}
                        >
                            <DatePicker
                                id="birthDate"
                                name="birthDate"
                                selected={formData.birthDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Selecciona una fecha"
                                required
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={110}
                                maxDate={new Date()}
                                className={styles.datePicker}
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
                            value={formData.gender}
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
