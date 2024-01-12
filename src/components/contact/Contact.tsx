import './contact.css';

import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

interface ContactFormData {
    user_name: string;
    user_email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(true);
        emailjs
            .sendForm(
                'service_yq1twup',
                'template_tl9zh78',
                formRef.current as HTMLFormElement,
                '8JgpLug6bl2xGtn83'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        const target = e.target as HTMLFormElement;
        target.reset();
    };
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            {/* <h5>Get In Touch</h5>
            <h5>
                I do receive your messages and will respond asap if the valid email is
                provided :)
            </h5> */}

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>atulnair11@gmail.com</h5>
                        <a href="mailto:atulnair11@gmail.com">Send a message</a>
                    </article>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        name="user_name"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Your Email"
                        name="user_email"
                        required
                    />
                    <textarea
                        placeholder="Your message"
                        // rows="7"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;