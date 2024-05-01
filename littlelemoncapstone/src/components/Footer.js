import React from "react";
import logo from"../assets/logo-footer.png";
import"../style/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter ,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <footer >
        <article className="article-layer">
        <img className="footer-img" src={logo} alt="Logo" />

        <nav className="footer-nav">
      <ul>
        <li><NavLink NavLink className="footer-a" to="/">Home</NavLink></li>
        <li><NavLink className="footer-a" to="/about">About</NavLink></li>
        <li><NavLink className="footer-a" to="/menu">Menu</NavLink></li>
        <li><NavLink className="footer-a" to="/reservation" >Reservation</NavLink></li>
        <li><NavLink className="footer-a" to="/order">Order Online</NavLink></li>
        {/* <li><a className="footer-a" href="/login">Login</a></li> */}
      </ul>

        </nav>
        <nav>
      <ul>
        <li><a className="footer-a" href="#"> <FontAwesomeIcon icon={faPhone} className="icon-nav"  /> +27 21 480 0431</a></li>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faLocationDot} className="icon-nav" /> Chicago-34 Bree Street </a></li>
        <li><a className="footer-a" href="#"> <FontAwesomeIcon icon={faEnvelope} className="icon-nav" /> info@Little-Lemon.com</a></li>

      </ul>

        </nav>
        <nav>
      <ul>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faTwitter} className="icon-nav" />Twitter</a></li>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faFacebook} className="icon-nav" /> Facebook</a></li>
      </ul>

        </nav>
        </article>
        {/* <p className="p-footer">&copy; 2023 Little Lemon</p>  */}
        </footer>

    );
}
export default Footer;