import React from "react";
import "../styles/Footer.css";
import logoRectangle from "../images/logo-rectangle.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <Link to= "/" ><img src={logoRectangle} className="logo-container" alt="" /></Link>
                <div>Custom cutting board and charcuterie boards for that special someone in your life. </div>
            </div>
            <ul className="footer-quicklink-container">
                <li className="quick-link-header">Quick Links</li>
                <li className="footer-tab">
                    <Link to="/Shop" >Shop</Link>
                </li>
                <li className="footer-tab">
                    <Link to="/Blog" >Blog</Link>
                </li>
                <li className="footer-tab">
                    <Link to="/Contact" >Contact</Link>
                </li>
            </ul>
            
            <ul className="policy-links-container">
                <li>
                    <Link to="/Shipping-Returns-Policy">Shipping And Return Policy</Link>
                </li>
                <li>
                    <Link to="/Terms-Of-Service-Policy">Terms Of Service And Privacy Policy</Link>
                </li>
                <li>
                    <div>© 2022 GatherForCheese.com</div>
                </li>
            </ul>
        </div>

    )
}

export default Footer;