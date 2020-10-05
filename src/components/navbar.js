import React from "react";
import "../styles/navbar.scss"
import Person from "../media/yellow person.png"
import Purse from "../media/yellow purse.png"

class NavBar extends React.Component {

  render() {
    return (
        <nav className="nav-bar" >
            <a className="navbar-title" href="/">
                <div id="science">The Science</div>
                <div id="tingz">Tingz</div> 
            </a>
            <a className="navbar-block" href="/">HOME</a>
            <a className="navbar-block" href="/">SHOP</a>
            <a className="navbar-block" href="/">TEACHER RESOURCES</a>
            <a className="navbar-block" href="/">BLOG</a>
            <a className="navbar-block" href="/">ABOUT</a>
            <img id="person" src={Person} alt="person icon"></img>
            <div id="login">Log In</div>
            <img id="purse" src={Purse} alt="Purse Icon"></img>
            <div id="cart-num">1</div>
            <div id="delay-warning">We are experiencing shipping delays due to COVID-19. We appreciate your pateince and thank you for shopping small!</div>
        </nav>
    );
  }
}

export default NavBar;
