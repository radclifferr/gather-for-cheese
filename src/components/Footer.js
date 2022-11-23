import React from "react";
import "../styles/Footer.css";
import logoRectangle from "../images/logo-rectangle.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={logoRectangle} alt="" className="footer-logo"/>
                <div>Custom cutting board and charcuterie boards for that special someone in your life. </div>
            </div>
            <ul className="footer-quicklink-container">
                <li className="quick-link-header">Quick Links</li>
                <li>
                    <Link to="/Shop" className="footer-tab">Shop</Link>
                </li>
                <li>
                    <Link to="/Blog" className="footer-tab">Blog</Link>
                </li>
                <li>
                    <Link to="/Contact" className="footer-tab">Contact</Link>
                </li>
            </ul>
            
            <div className="policy-link-container">
                <Link to="/Returns-Refunds-Policy">Returns And Refunds Policy</Link>
                <Link to="/Terms-Of-Service">Terms Of Service And Privacy Policy</Link>
                <div>© 2022 GatherForCheese.com</div>
                
            </div>
        </div>

    )
}

export default Footer;