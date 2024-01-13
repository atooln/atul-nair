import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer>
            {/* <a href="#home" className="footer__logo">Atul Nair</a> */}
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {/* <div className="footer__socials">
                <a href="https://www.linkedin.com/in/atool-nair/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
                <a href="https://github.com/atooln" target="_blank" rel="noreferrer" ><FaGithub /></a>
            </div> */}
            {/* <div className="footer__copyright">
                <small>&copy; ET 2022. All rights reserved.</small>
            </div> */}
        </footer>
    )
}

export default Footer;