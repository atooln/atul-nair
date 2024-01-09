import React from "react";
import "./projects.css";

//Portfolio function
function Projects() {
    const soloProjects = [
        {
            id: 1,
            title: "Controlling Drone Flight with Hand Gestures",
            // img: IMG1,
            description:
                "Implemented modern gradient boosting techniques to classify hand movement data collected from EMG sensors to drone movements",
            technologies: "Python | Numpy | Pandas | XGBoost | SK Learn ",
            link: "https://arxiv.org/abs/2206.14947",

        },
        {
            id: 2,
            title: "Twitter Political Affiliation Classification",
            // img: IMG4,
            description:
                "Predicted political leanings of a tweet using setiment analysis and modern Natural Language Processing (NLP) techniques",
            technologies: "Python | Numpy | Pandas | XGBoost | SK Learn | NLTK ",
            link: "https://github.com/atooln/Twitter-Political-Affiliation-Classification",
        },
        {
            id: 3,
            title: "Breast Cancer Life Expectancy Analysis",
            // img: IMG2,
            description: "Utilized traditional classification methods to determine the best predictors for cancer survival",
            technologies: "Python | Numpy | Pandas | SK Learn ",
            link: "https://github.com/atooln/Breast-Cancer-Analysis",
        },
        {
            id: 4,
            title: "Pneumonia Image Segmentation",
            // img: IMG3,
            description:
                "Implemented a Convolutional Neural Network (CNN) architecture to classify Pneumonia diagnoses based on X-Ray imaging ",
            technologies: "Python | Numpy | Tensorflow",
            link: "https://github.com/atooln/Pneumonia-Image-Segmentation",
        },
        {
            id: 5,
            title: "Cats and Dogs classification with VGG-16",
            // img: IMG5,
            description:
                "Used transfer learning methods to train a cats and dogs image segmentation classifier",
            technologies: "Tensorflow | Keras",
            link: "https://github.com/atooln/VGG-Cat-Dog-Classifier",
        },
        {
            id: 6,
            title: "This Website :)",
            // img: IMG6,
            description:
                "Created this portfolio website using TypeScript, React and Vite",
            technologies: "TypeScript | React | Vite",

            link: "https://github.com/atooln/atul-nair",
        },
    ];

    return (
        <section id="portfolio">
            {/* <h5>My Recent Work</h5> */}
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {soloProjects.map((pro) => (
                    <article className="portfolio__item" key={pro.id}>
                        {/* <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div> */}
                        <div className="portfolio__item-content">
                            <h3>{pro.title}</h3>
                            <p>{pro.description}</p>
                            <p>{pro.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            {/* <a
                                href={pro.github}
                                target="_blank"
                                className="btn"
                                rel="noreferrer"
                            >
                                GitHub
                            </a> */}
                            <a
                                href={pro.link}
                                target="_blank"
                                className="btn btn-primary"
                                rel="noreferrer"
                            >
                                Link
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;