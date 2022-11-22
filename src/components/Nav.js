import React from "react";
import "../styles/Nav.css"
import ShoppingCart from "../images/shopping-cart.svg"
import logoRectangle from "../images/logo-rectangle.png"

const Nav = () => {
    return (
        <div className="nav-bar-container">
            <img className="logo-container" src={logoRectangle} alt="" />
            <div className="tab-container">
                <div className="tab">Home</div>
                <div className="tab">Shop</div>
                <div className="tab">Blog</div>
                <div className="tab">About</div>
                <div className="tab">Contact</div>
            </div>
            <img className = "shopping-cart" src={ShoppingCart} alt=""/> 

        </div>
        
    )
}

export default Nav;