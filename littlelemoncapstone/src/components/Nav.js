import React from "react";
import "../style/Nav.css";
import { NavLink } from 'react-router-dom';


function Nav(){

    return(

      <nav>
      <ul className="nav-layer">
        <li className="li-nav" >
          <NavLink className="a-nav" activeClassName="active" to="/">Home</ NavLink>
          </li>
        <li className="li-nav"><NavLink className="a-nav" activeClassName="active" to="/about">About</NavLink></li>
        <li className="li-nav"><NavLink className="a-nav" activeClassName="active" to="/menu">Menu</NavLink></li>
        <li className="li-nav"><NavLink className="a-nav" activeClassName="active" to="/reservation" >Reservation</NavLink></li>
        <li className="li-nav"><NavLink className="a-nav" activeClassName="active" to="/order">Order Online</NavLink></li>
        {/* <li className="li-nav"><NavLink className="a-nav" activeClassName="active" to="/login">Login</NavLink></li> */}
      </ul>
    </nav>

    );
}

export default Nav;