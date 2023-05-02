import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This site provides you all movies and Tv shows Information.
                    SUBHRAJEET MOHANTY 
                </div>
                <div className="socialIcons">
                <a href="https://www.facebook.com/subhrajeet.mohanty.7" target="_blank" rel="noopener noreferrer" className="icon">
                <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/subhrajeet_mohanty/" target="_blank" rel="noopener noreferrer" className="icon">

                        <FaInstagram />
                    </a>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <a href="https://www.linkedin.com/in/subhrajeet-mohanty-447b54150" target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin />
                </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
