import { Component } from "react";
import { MenuData } from "./AdminMenuData";
import "./AdminNavbar.css";

class AdminNavbar extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="adminNavbar">
            <nav className="admin_navbar-items">
                <img className={this.state.clicked ? "navbar-logo active" : "navbar-logo"} src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartOrangeLogo.jpg?alt=media&token=068565b4-da94-4d3e-9841-030bc2ffd6c6" alt="" />
                <div className="menu-hamburger" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars orange"}></i>
                </div>
                <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
            </div>
        );
    }
}

export default AdminNavbar;