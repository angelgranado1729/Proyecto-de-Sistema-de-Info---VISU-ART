import { ADMIN_OBRAS_URL, ADMIN_TOURS_URL, ADMIN_RESERVE_URL, LOGIN_URL, ADMIN_URL, ADMIN_URL_CONTACT, HOME_URL } from "../../constants/urls";
import { logout } from "../../firebase/auth";

export const MenuData = [

    {
        title: "Inicio",
        url: HOME_URL,
        cName: "admin_navbar-links"

    },
    {
        title: "Tours",
        url: ADMIN_TOURS_URL,
        cName: "admin_navbar-links"
    },
    {
        title: "Obras",
        url: ADMIN_OBRAS_URL,
        cName: "admin_navbar-links"

    },

    {
        title: "Reservas",
        url: ADMIN_RESERVE_URL,
        cName: "admin_navbar-links"
    },

    {
        title: "Contactos",
        url: ADMIN_URL_CONTACT,
        cName: "admin_navbar-links"
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