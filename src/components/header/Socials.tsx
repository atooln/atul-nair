import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


function Socials() {
    return (
        <div className="cta">
            <a href="https://www.linkedin.com/in/atool-nair/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
            <a href="https://github.com/atooln" target="_blank" rel="noreferrer" ><FaGithub /></a>
        </div>
    )
}

export default Socials; 