import {ADMIN_OBRAS_URL,ADMIN_TOURS_URL,ADMIN_RESERVE_URL,LOGIN_URL,ADMIN_URL,ADMIN_URL_CONTACT } from "../../constants/urls";

export const MenuData = [

    {
        title: "Inicio",
        url: ADMIN_URL,
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
        title: "Comentario",
        url: ADMIN_URL_CONTACT,
        cName: "admin_navbar-links"
    },
    
    {
        title: "Salir",
        url: LOGIN_URL,
        cName: "admin_navbar-links-mobile-transparent"
    }
]