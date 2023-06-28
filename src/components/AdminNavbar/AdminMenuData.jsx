import { CONTACT_URL, LOGIN_URL, MISION_URL, OBJECTIVES_URL, REGISTER_URL, VISION_URL } from "../../constants/urls";

export const MenuData = [
    {
        title: "Obras",
        url: MISION_URL,
        cName: "admin_navbar-links"

    },
    {
        title: "Tours",
        url: VISION_URL,
        cName: "admin_navbar-links"
    },
    {
        title: "Fechas",
        url: OBJECTIVES_URL,
        cName: "admin_navbar-links"
    },
    {
        title: "Reservas",
        url: CONTACT_URL,
        cName: "admin_navbar-links"
    },
    {
        title: "Perfil",
        url: REGISTER_URL,
        cName: "admin_navbar-links-mobile"
    },
    {
        title: "Salir",
        url: LOGIN_URL,
        cName: "admin_navbar-links-mobile-transparent"
    }
]