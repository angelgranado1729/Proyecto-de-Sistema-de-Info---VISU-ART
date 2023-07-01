import {
    ADMIN_OBRAS_URL,
    ADMIN_TOURS_URL,
    ADMIN_RESERVE_URL,
    HOME_URL,
    ADMIN_URL
} from "../../constants/urls";
import { logout } from "../../firebase/auth";


export const MenuData = [
    {
        title: "Obras",
        url: ADMIN_OBRAS_URL,
        cName: "admin_navbar-links"

    },
    {
        title: "Tours",
        url: ADMIN_TOURS_URL,
        cName: "admin_navbar-links"
    },
    {
        title: "Reservas",
        url: ADMIN_RESERVE_URL,
        cName: "admin_navbar-links"
    },

    {
        title: "Perfil",
        url: ADMIN_URL,
        cName: "admin_navbar-links-mobile"
    },
    {
        title: "Salir",
        url: HOME_URL,
        cName: "admin_navbar-links-mobile-transparent",
        onClick: () => {
            logout();
        }
    }
]