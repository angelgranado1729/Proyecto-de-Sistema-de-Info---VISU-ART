//el codigo de arriba es el codigo de beatriz viejo.
//si hay que añadir mas campos se debe agregar un estado para cada campo, un input para que el usuario pueda editar el valor
//, y luego incluye el valor en el objeto que se pasa a "updateUser"
import { useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { updateUser } from "../../../firebase/users";
import Subtitle from "../../../components/Subtitle/Subtitle";
import "./EditProfilePage.css";
import { USER_PROFILE_URL } from "../../../constants/urls";
import { Link } from "react-router-dom";
import { db, storage } from "../../../firebase/firebase-config";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as getRef } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";


const EditProfilePage = () => {
    const { user } = useUserContext();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [email2, setEmail2] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [okemail, setOkemail] = useState(false);
    const [okpassword, setOkpassword] = useState(false);
    const [password2, setPassword2] = useState(null);
    // const { dataUsuario, setDataUsuario } = useContext(UserContext);
    // const [image, setImage] = useState(null);

    const [url, setUrl] = useState(null);


    // muestra la foto (rescata el valor para mostrarlo)
    const watch = async () => {
        const ref = getRef(storage, "usersphotos/" + user.id);
        const downloadURL = await getDownloadURL(ref);
        setUrl(downloadURL);
        console.log(downloadURL);

    };
    // funcion para actualizar la informacion de los inputs y los actualiza en la base de datos 
    const updateinfo = async (event) => {

        console.log(okemail);
        console.log(okpassword);
        console.log(event);

        if (okemail === true && okpassword === true) {
            const userDoc = doc(db, "users", user.id);
            await updateDoc(userDoc, {
                name: name,
                email: email,
            })
        } else {
            alert("El email o la contraseña no coinciden")
        }

    };
    // verificar si el email en los dos campos de input son iguales y no permitir que se actualice si no lo son
    const checkEmail = () => {
        if (email === email2) {
            setOkemail(true);
            return true;
        } else {
            setOkemail(false);
            return false;
        }
    };
    // verificar si la contrasena en los dos campos de input son iguales y no permitir que se actualice si no lo son

    const checkPassword = () => {
        if (password === password2) {
            setOkpassword(true);
            return true;
        } else {
            setOkpassword(false);
            return false;

        }
    };
    const checkEmailPassword = () => {
        let e = checkEmail();
        let a = checkPassword();
        console.log(okemail);
        console.log(okpassword);
        updateinfo(e, a);
    };






    // esto sirve para montarla por primera vez la foto y ademas actualizarla
    const doUpload = async (event) => {
        const file = event.target.files[0];
        console.log(user);
        const ref = getRef(storage, "usersphotos/" + user.id);

        const uploadTaskSnapshot = await uploadBytes(ref, file);
        console.info("Finished uploading!");

        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
        console.log('File available at', downloadURL);

        const userDoc = doc(db, "users", user.id);
        await updateDoc(userDoc, {
            photo: true,
        });


        setUrl(downloadURL);
        watch();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const storageRef = firebase.storage().ref();
        // const imageRef = storageRef.child(`images/${image.name}`);
        // await imageRef.put(image);
        // const imageURL = await imageRef.getDownloadURL();

        try {
            await updateUser(user.id, {
                name,
                email /*, otros campos que se quieran añadir });*/,
            });
            // Aquí se agrega la lógica para manejar el éxito de la operación
        } catch (error) {
            // Aquí se manejan los errores
        }
    };


    useEffect(() => {
        watch()
    }, [])
    return (
        <div className="App-v2">
            <header className="back-header top-editprofile">
                <Link to={USER_PROFILE_URL}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartBlueLogo.jpg?alt=media&token=ab0e88ba-968b-4b0f-9b83-42c8e0183e66"
                    alt=""
                />
            </header>
            <div className="decorations-container">
                <div className="editprofile-decoration1"></div>
                <div className="editprofile-decoration2"></div>
                <div className="editprofile-container">
                    <div className="editprofile-img">
                        <img className="imagenusuario" src={url || "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"} />
                    </div>

                    <i className="fa-solid fa-pen-to-square"></i>
                    <Subtitle subtitle="Edita tus datos:" />
                    <div className="input-container">
                        <div className="column">
                            <div className="input">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="input">
                                <label>Correo</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span>correo@ejemplo.com</span>
                            </div>
                            <div className="input" value={email2} onChange={(e) => setEmail2(e.target.value)}>
                                <label>Verifica tu correo</label>
                                <input type="text" />
                                <span>correo@ejemplo.com</span>
                            </div>
                            {/*Agregar mas inputs segun lo que podamos anadir en firebase*/}
                        </div>
                        <div className="column-center">
                            <p></p>
                        </div>
                        <div className="column">
                            <div className="input" value={password} onChange={(e) => setPassword(e.target.value)}>
                                <label>Contraseña</label>
                                <input type="text" />
                                <span>Más 6 de dígitos e incluya carácteres especiales</span>
                            </div>
                            <div className="input" value={password2} onChange={(e) => setPassword2(e.target.value)}>
                                <label>Verifica tu contraseña</label>
                                <input type="text" />
                                <span>Más 6 de dígitos e incluya carácteres especiales</span>
                            </div>
                            {/* Agregar mas inputs segun lo que podamos anadir en firebase */}
                        </div>
                        <div className="inputimagen" >
                            <input onChange={doUpload} type="file" accept="image/*" />
                        </div>
                    </div>
                    <button className="editprofile-btn" onClick={checkEmailPassword}>Guardar Cambios</button>
                    <button className="editprofile-btn margen" onClick={watch}>Subir foto</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;
