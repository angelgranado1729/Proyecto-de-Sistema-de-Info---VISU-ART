import { Component } from "react";
import { MenuData } from "./MenuData";
import "./Navbar.css";

class Navbar extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar-items">
                <img className={this.state.clicked ? "navbar-logo active" : "navbar-logo"} src="https://firebasestorage.googleapis.com/v0/b/visuart-17959.appspot.com/o/LogosVisuArt%2FvisuartBlackLogo.jpg?alt=media&token=f82ed7c0-ed7f-4b6a-bd4f-0e3d4724dd73" alt="" />
                <div className="menu-hamburger" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;