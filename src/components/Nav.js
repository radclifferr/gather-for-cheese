import React, { useState, useEffect } from "react";
import "../styles/Nav.css"
import ShoppingCart from "../images/shopping-cart.svg"
import logoRectangle from "../images/logo-rectangle.png"
import { Link, NavLink } from "react-router-dom"


const Nav = (props) => {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 850;





    return (
        isMobile ? (
            <div className="nav-bar-container">
                <Link to= "/" ><img className="header-logo-container" src={logoRectangle} alt="" /></Link>
                <div className="tab-container">
                    <NavLink to= "/" className="tab">Home</NavLink>
                    <NavLink to= "/Shop"className="tab">Shop</NavLink>
                    <NavLink to= "/Blog" className="tab">Blog</NavLink>
                    <NavLink to= "/Contact" className="tab">Contact</NavLink>
                    <NavLink to= "/Cart" className = "tab">Cart</NavLink>
                </div>
            </div>
        ) : (
            <div className="nav-bar-container">
                <Link to= "/" ><img className="header-logo-container" src={logoRectangle} alt="" /></Link>
                <div className="tab-container">
                    <NavLink to= "/" className="tab">Home</NavLink>
                    <NavLink to= "/Shop"className="tab">Shop</NavLink>
                    <NavLink to= "/Blog" className="tab">Blog</NavLink>
                    <NavLink to= "/Contact" className="tab">Contact</NavLink>
                </div>
                <Link to= "/Cart" className = "shopping-cart">
                    <img  src={ShoppingCart} alt=""/>
                    <div className="cart-quantity">{props.getCart.length}</div>
                </Link>
            </div>
        )
    )
}

export default Nav;