import React from "react";
import "../styles/Footer.css"
import logoRectangle from "../images/logo-rectangle.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoRectangle} alt="" className="footer-logo"/>
            <div>
                <div className="footer-tab">Home</div>
                <div className="footer-tab">Shop</div>
                <div className="footer-tab">Blog</div>
                <div className="footer-tab">About</div>
                <div className="footer-tab">Contact</div>
                <div className="footer-tab">Cart</div>
            </div>
            <div>© 2022 GatherForCheese.com</div>
            <div>
                <div>Returns And Refunds Policy</div>
                <div>Terms of Service And Privacy Policy</div>
            </div>
        </div>

    )
}

export default Footer;