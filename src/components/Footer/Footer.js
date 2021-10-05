import { faMapMarker, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="footer-container">

            {/*------------------------------------- footer top section --------------------------------------- */}
            <div className="top-footer-container">
                <div className="contact-container">
                    <h1>Contact us</h1>

                    <FontAwesomeIcon style={{ marginRight: "15px" }} icon={faMapMarker} />
                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                    <br />

                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPhoneAlt} />
                    <span>+2 392 3929 210</span>
                    <br />

                    <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPaperPlane} />
                    <span>info@yourdomain.com</span>
                </div>

                <div className="aim-container">
                    <h1>Our Aim</h1>
                    <p style={{ textAlign: "left" }}>
                        We want to make programming easier and comfortable to the learners.
                        Programmers who understand the concept of OO programming will have easier time learning Java. Once a thorough understanding of the fundamental concepts of languages is acquired, it becomes easier to see how concepts are incorporated into the design of the language being learned.

                    </p>
                </div>
            </div>
            

            {/*----------------------------------------- footer bottom section------------------------------  */}
            <p style={{ marginTop: "30px" }}>© 2021 Eduonix Learning Solutions Pvt Ltd. All Rights Reserved.</p>
            <br />
        </div>
    );
};

export default Footer;