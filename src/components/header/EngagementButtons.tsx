import React from 'react';
import Resume from '../../assets/AN-Resume.pdf'

function EngagementButtons() {
    return (
        <div className="cta">
            <a href={Resume} download className="btn">
                Resume
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's talk
            </a>
        </div>
    );
};

export default EngagementButtons;