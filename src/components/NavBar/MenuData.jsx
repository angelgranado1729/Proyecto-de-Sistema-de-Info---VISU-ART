import {
  CONTACT_URL,
  HOME_URL,
  LOGIN_URL,
  MISION_URL,
  OBJECTIVES_URL,
  REGISTER_URL,
  USER_PROFILE_URL,
  VISION_URL
} from "../../constants/urls";
import { logout } from "../../firebase/auth";

const getMenuData = (user) => {
  const menuData = [
    {
      title: "Misión",
      url: MISION_URL,
      cName: "navbar-links"
    },
    {
      title: "Visión",
      url: VISION_URL,
      cName: "navbar-links"
    },
    {
      title: "Objetivos",
      url: OBJECTIVES_URL,
      cName: "navbar-links"
    },
    {
      title: "Contacto",
      url: CONTACT_URL,
      cName: "navbar-links"
    }
  ];

  if (user) {
    menuData.push({
      title: "Perfil",
      url: USER_PROFILE_URL,
      cName: "navbar-links"
    });
    menuData.push({
      title: "Cerrar sesión",
      url: HOME_URL,
      cName: "navbar-links-mobile",
      onClick: () => {
        logout();
      }
    });
  } else {
    menuData.push({
      title: "Iniciar",
      url: LOGIN_URL,
      cName: "navbar-links-mobile-transparent"
    });
    menuData.push({
      title: "Registrarse",
      url: REGISTER_URL,
      cName: "navbar-links-mobile"
    });
  }

  return menuData;
};

export default getMenuData;
