import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";



export function Layout() {
    return (
        <UserContextProvider>
            <main>
                <section className="body">
                    <Outlet />
                </section>
            </main>
        </UserContextProvider>
    );
}