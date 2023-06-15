import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component{

    
    //Cambio de icono: Hamburger Menu
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="items">
                <h1 className="logo">VISUART</h1>
                <div className="menu-hamburger" onClick={this.handleClick}>
                    <i className ={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
                </div>
                <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return(
                            <li key ={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;