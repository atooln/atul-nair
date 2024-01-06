import React from "react";
import EngagementButtons from "./EngagementButtons";
import './header.css';


function Header() {

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Atul Nair</h1>
                <h5 className="text-light">Software Engineer</h5>
                <EngagementButtons />
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>

        </header>

    );

};

export default Header;