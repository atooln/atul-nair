import "./bio.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


function Bio() {
    return (
        <section id="about">

            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={img} alt="Atul Nair" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <a href="https://www.linkedin.com/in/atool-nair/" target="_blank" rel="noreferrer" >
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Experience</h5>
                                <small>1.5 years</small>
                            </article>
                        </a>

                        <a href="https://github.com/atooln" target="_blank" rel="noreferrer" >
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>10+ Completed Projects</small>
                            </article>
                        </a>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae
                        congue eu consequat ac. Libero enim sed faucibus turpis in eu mi bibendum.
                        Cursus metus aliquam eleifend mi in. Auctor neque vitae tempus quam.
                        Amet facilisis magna etiam tempor orci eu lobortis. Cursus vitae congue
                        mauris rhoncus aenean. Vel quam elementum pulvinar etiam non quam lacus
                        suspendisse. Purus in mollis nunc sed id semper risus. Sed sed risus pretium
                        quam vulputate dignissim suspendisse in. A cras semper auctor neque vitae tempus
                        quam pellentesque. Lectus urna duis convallis convallis tellus. Sit amet consectetur
                        adipiscing elit. Amet cursus sit amet dictum. Cursus mattis molestie a iaculis.
                        Quam elementum pulvinar etiam non quam lacus suspendisse. Ultrices vitae auctor eu augue.
                        Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Hendrerit dolor magna eget est
                        lorem ipsum dolor sit amet. Eu mi bibendum neque egestas congue.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bio;