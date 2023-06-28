import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import Title from "../../../components/Title/Title";


const AdminPage = () => {
    return (
        <div className="App">
            <AdminNavbar />
            <div className="main-admin">
                <Title title="Ejemplo de Título"/>
            </div>
        </div>
    )
}

export default AdminPage