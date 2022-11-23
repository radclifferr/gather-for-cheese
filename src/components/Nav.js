import React from "react";
import "../styles/Nav.css"
import ShoppingCart from "../images/shopping-cart.svg"
import logoRectangle from "../images/logo-rectangle.png"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div className="nav-bar-container">
            <Link to= "/" ><img className="logo-container" src={logoRectangle} alt="" /></Link>
            <div className="tab-container">
                <Link to= "/" className="tab">Home</Link>
                <Link to= "/Shop"className="tab">Shop</Link>
                <Link to= "/Blog" className="tab">Blog</Link>
                <Link to= "/Contact" className="tab">Contact</Link>
            </div>
            <Link to= "/Cart" className = "shopping-cart" ><img  src={ShoppingCart} alt=""/></Link>
        </div>
        
    )
}

export default Nav;