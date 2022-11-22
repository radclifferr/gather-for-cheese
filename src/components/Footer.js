import React from "react";
import "../styles/Footer.css"
import logoRectangle from "../images/logo-rectangle.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={logoRectangle} alt="" className="footer-logo"/>
                <div>Custom cutting board and charcuterie boards for that special someone in your life. </div>
            </div>
            <ul className="footer-quicklink-container">
                <li className="quick-link-header">Quick Links</li>
                <li className="footer-tab">Shop</li>
                <li className="footer-tab">Blog</li>
                <li className="footer-tab">About</li>
                <li className="footer-tab">Contact</li>
            </ul>
            
            <div className="policy-link-container">
                <div>Returns And Refunds Policy</div>
                <div>Terms of Service And Privacy Policy</div>
                <div>© 2022 GatherForCheese.com</div>
            </div>
        </div>

    )
}

export default Footer;