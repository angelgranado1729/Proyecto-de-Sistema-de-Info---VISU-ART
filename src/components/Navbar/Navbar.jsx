import React, { useEffect, useState } from "react";
import getMenuData from "./MenuData";
import { useUserContext } from "../../contexts/UserContext";
import "./Navbar.css";

const Navbar = () => {
    const [user, setUser] = useState(null);

    const userContext = useUserContext();
    useEffect(() => {
        setUser(userContext.user);
        console.log(userContext.user)
    }, [user, userContext.user]);

    const [clicked, setClicked] = useState(false);
    const menuData = getMenuData(user);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="navbar-items">
            <img
                className={clicked ? "navbar-logo active" : "navbar-logo"}
                src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartBlackLogo.jpg?alt=media&token=f82ed7c0-ed7f-4b6a-bd4f-0e3d4724dd73"
                alt=""
            />
            <div className="menu-hamburger" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
                {menuData.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} className={item.cName}
                            {...(item.onClick && { onClick: item.onClick })}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
