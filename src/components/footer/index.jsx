import "./index.scss";
import { FaHeart,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__about">
                    <a href="/"><img src="./logo-light.svg" alt="" /></a>
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2024 All rights reserved</p>
                </div>
                <div className="footer__social">
                    <ul>
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </footer> 
    );
}

export default Footer;