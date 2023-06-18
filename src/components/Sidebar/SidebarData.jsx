import { HOME_URL,ADMIN_TOURS_URL,ADMIN_OBRAS_URL,ADMIN_RESERVE_URL } from "../../constants/urls";

export const SiderbarData = [
    {
        title: "Gestión de Obras",
        icon: "fa-solid fa-brush",
        link: ADMIN_OBRAS_URL
    },
    {
        title: "Gestión de Tours",
        icon: "fa-solid fa-list-check",
        link: ADMIN_TOURS_URL
    },
    {
        title: "Editar Fechas",
        icon: "fa-solid fa-calendar-days",
        link: HOME_URL
    },
    {
        title: "Gestión de reservas",
        icon: "fa-solid fa-users",
        link: ADMIN_RESERVE_URL
    }
]