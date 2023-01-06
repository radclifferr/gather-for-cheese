import React from "react";
import "../styles/Footer.css";
import logoRectangle from "../images/logo-rectangle.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <Link to= "/" ><img src={logoRectangle} className="logo-container" alt="" /></Link>
                <div>Custom cutting board and charcuterie boards for that special someone in your life. </div>
            </div>
            <ul className="footer-quicklink-container">
                <li className="quick-link-header">Quick Links</li>
                <li>
                    <NavLink to="/Shop" className="footer-tab">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog" className="footer-tab">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className="footer-tab">Contact</NavLink>
                </li>
            </ul>
            
            <ul className="policy-links-container">
                <li>
                    <NavLink to="/Shipping-Returns-Policy">Shipping And Return Policy</NavLink>
                </li>
                <li>
                    <NavLink to="/Terms-Of-Service-Policy">Terms Of Service And Privacy Policy</NavLink>
                </li>
                <li>
                    <div>© 2022 GatherForCheese.com</div>
                </li>
            </ul>
        </div>

    )
}

export default Footer;