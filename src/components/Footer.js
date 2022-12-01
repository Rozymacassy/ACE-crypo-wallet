import React from "react";
import '../styles/Footer.css';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { GrYoutube } from 'react-icons/gr';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';



const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="footer1">
                <div className="brand">
                    <h5>About ACE</h5>
                    <p className="footer-text">What's the brand all about?</p>
                </div>
                <div className="hire">
                    <h5>Hiring</h5>
                    <p className="footer-text">
                        Learn about open roles on the Team
                    </p>
                </div>
                <div className="contact">
                    <h5>Contact Us</h5>
                    <p className="footer-text">Facing issues? Get in touch we can help</p>
                </div>


            </div>
            <hr />

            <div className="footer2">
                {/* <div className="terms"> */}
                    <ul className="term">
                        <li class="term-item">Privacy</li>
                        <li class="term-item">Terms</li>
                        <li class="term-item">Cookies Settings</li>
                        <li class="term-item">© 2022 ACE </li>
                    </ul>
                {/* </div> */}
                {/* <div className="fa-icons"> */}
                    <ul className="icons">
                        <li class="icon-item"><AiFillTwitterCircle size={20} /></li>
                        <li class="icon-item"><GrYoutube size={20} /></li>
                        <li class="icon-item"><TiSocialInstagramCircular size={20} /></li>
                        <li class="icon-item"><AiFillLinkedin size={20} /></li>
                        <li class="icon-item"><MdFacebook size={20} /></li>

                    </ul>
                {/* </div> */}
            </div>


        </div>
    );
}

export default Footer;