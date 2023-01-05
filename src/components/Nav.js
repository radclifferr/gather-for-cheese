import React from "react";
import "../styles/Nav.css"
import ShoppingCart from "../images/shopping-cart.svg"
import logoRectangle from "../images/logo-rectangle.png"
import { Link, NavLink } from "react-router-dom"


const Nav = () => {
    return (
        <div className="nav-bar-container">
            <Link to= "/" ><img className="header-logo-container" src={logoRectangle} alt="" /></Link>
            <div className="tab-container">
                <NavLink to= "/" className="tab">Home</NavLink>
                <NavLink to= "/Shop"className="tab">Shop</NavLink>
                <NavLink to= "/Blog" className="tab">Blog</NavLink>
                <NavLink to= "/Contact" className="tab">Contact</NavLink>
            </div>
            <Link to= "/Cart" className = "shopping-cart" ><img  src={ShoppingCart} alt=""/></Link>
        </div>
        
    )
}

export default Nav;