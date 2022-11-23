import React from "react";
import "../styles/Nav.css"
import ShoppingCart from "../images/shopping-cart.svg"
import logoRectangle from "../images/logo-rectangle.png"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div className="nav-bar-container">
            <img className="logo-container" src={logoRectangle} alt="" />
            <div className="tab-container">
                <Link to= "/" className="tab">Home</Link>
                <Link to= "/Shop"className="tab">Shop</Link>
                <Link to= "/Blog" className="tab">Blog</Link>
                <Link to= "/Contact" className="tab">Contact</Link>
            </div>
            <img className = "shopping-cart" src={ShoppingCart} alt=""/> 

        </div>
        
    )
}

export default Nav;