import React from "react";
import logo from "../img/logo512.png"
import '../css/Navbar.css'
import { Link} from 'react-router-dom'

class Navbar extends React.Component{

    handleClick = (event) =>{
        var element = document.getElementsByClassName("link");
        for (let index = 0; index < element.length; index++) {
            element[index].classList.remove("active");
        }
        event.target.classList.add("active");
    }

    render(){
        return(
            <nav className="navbar bg-white">
                <div className="navbar-brand">
                    <img src={logo} alt=""/>
                </div>
                <ul className="navbar-link ml-auto">
                    <li><Link className="link active" to="/" onClick={this.handleClick}>Dashboard</Link></li>
                    <li><Link className="link" to="/addpeople" onClick={this.handleClick}>Add People</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;