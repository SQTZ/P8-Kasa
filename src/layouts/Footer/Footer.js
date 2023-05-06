import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/img/Layouts/Footer/Logo.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;