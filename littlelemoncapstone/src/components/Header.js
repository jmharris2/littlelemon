import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import"../style/Header.css";
import hamburger from"../assets/icon _hamburger menu.svg";
function Header(){
    const  toggleDisplay=( )=> {
        var element = document.getElementsByClassName('hamburger-menu')[0];
        console.log(element);
        if (element.style.display === "none") {

          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      };
    return(
        <header className="header-layer">
        <img className="img-nav" src={logo}alt="Logo" />
        <div onClick={toggleDisplay} className="hamburger-nav">
        <img className="hamburger-img" src={hamburger} alt="hamburger-icon" />
        </div>
        <div  className="hamburger-menu " id="hamburger-menuss">
        <Nav />
        </div>
        </header>
    );
}
export default Header;