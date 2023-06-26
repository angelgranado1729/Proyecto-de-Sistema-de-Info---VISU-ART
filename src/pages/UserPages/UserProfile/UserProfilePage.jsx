// //import  { useState } from 'react';
// import { useUserContext } from "../../../contexts/UserContext";
// //import { updateUser } from "../../../firebase/users";
// import Subtitle from "../../../components/Subtitle/Subtitle";
// import styles from "./UserProfilePage.css"
// import { Link } from "react-router-dom";

// const UserProfilePage = () => {
//     const { user } = useUserContext();

//     return (
//         <div className={styles.AppV2}>
//             <header className={styles.backHeader}>
//                 <i className={styles.faSolidFaArrowLeft}></i>
//                 <img src="public/images/logos/visuartBlueLogo.jpg" alt="" />
//             </header>
//             <div className={styles.profileContainer}>
//                 <div className={styles.decorationUpContainer}></div>
//                 <div className={styles.decorationDownContainer}></div>
//                 <div className={styles.profileImg}></div>
//                 <i className={styles.faSolidFaPenToSquare}></i>
//                 <Subtitle subtitle="Tus datos:" />
//                 <div className={styles.inputContainer}>
//                     <div className={styles.column}>
//                         <div className={styles.input}>
//                             <label>Nombre</label>
//                             <input type="text" value={user.name} readOnly />
//                         </div>
//                         <div className={styles.input}>
//                             <label>Correo</label>
//                             <input type="text" value={user.email} readOnly />
//                         </div>
//                         {/*Agregar mas inputs segun lo que podamos anadir en firebase */}
//                     </div>
//                 </div>
//                 <Link to="/user-profile-edit">
//                     <button className={styles.blueBtn}>Editar Perfil</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default UserProfilePage



import Subtitle from "../../../components/Subtitle/Subtitle";
import { useUserContext } from "../../../contexts/UserContext";
import { Link } from 'react-router-dom';
import './UserProfilePage.css';
const UserProfilePage = () => {
    const { user } = useUserContext();

    return (
        <div className="App-v2">
            <header className="backHeader">
                <i className="faSolidFaArrowLeft"></i>
                <img src="public/images/logos/visuartBlueLogo.jpg" alt="" />
            </header>
            <div className="profileContainer">
                <div className="decorationUpContainer"></div>
                <div className="decorationDownContainer"></div>
                <div className="profileImg"></div>
                <i className="faSolidFaPenToSquare"></i>
                <Subtitle subtitle="Tus datos:" />
                <div className="inputContainer">
                    <div className="column">
                        <div className="input">
                            <label>Nombre</label>
                            <input type="text" value={user.name} readOnly />
                        </div>
                        <div className="input">
                            <label>Correo</label>
                            <input type="text" value={user.email} readOnly />
                        </div>
                        {/*Agregar mas inputs segun lo que podamos anadir en firebase */}
                    </div>
                </div>
                <Link to="/user-profile-edit">
                    <button className="blueBtn">Editar Perfil</button>
                </Link>
            </div>
        </div>
    )
}

export default UserProfilePage
