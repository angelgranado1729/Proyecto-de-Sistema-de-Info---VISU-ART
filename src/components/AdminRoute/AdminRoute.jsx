import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { HOME_URL, LOGIN_URL } from "../../constants/urls";
import { Loading } from "../Loading/Loading";

export function AdminRoute({ children }) {
    const { user, isLoadingUser } = useUserContext();

    if (isLoadingUser) {
        return (
            <Loading />
        );
    }

    if (!user || (user.type !== "admin")) {
        return <Navigate to={HOME_URL} />;
    }

    return children;
}
