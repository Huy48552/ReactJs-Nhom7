import React from 'react';
import { BiMap, BiTimeFive } from 'react-icons/bi';
// import { BiTimeFive,  } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import {
    AiOutlinePhone,
    AiFillTwitterSquare,
    AiFillInstagram,
} from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-item'>
                    <h2>About us</h2>
                    <p>Visit the store to experience devices for everyone.</p>
                </div>
                <div className='footer-item'>
                    <h2>Contact us</h2>
                    <div className='footer-info'>
                        <div className='footer-info-item'>
                            <span>
                                <BiMap />
                            </span>
                            <span>Da Nang City</span>
                        </div>
                        <div className='footer-info-item'>
                            <span>
                                <BiTimeFive />
                            </span>
                            <span>Mo-Fr 10:00-00:00, Sa-Sa 16:00-00:00</span>
                        </div>
                        <div className='footer-info-item'>
                            <span>
                                <AiOutlinePhone />
                            </span>
                            <span>09 999 999</span>
                        </div>
                        <div className='footer-info-item'>
                            <span>
                                <FiMail />
                            </span>
                            <span>info@store.org</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-social'>
                <div className='footer-social-wrap'>
                    <div className='footer-social-item'>
                        <p>©. All rights reserved.</p>
                    </div>
                    <div className='footer-social-item'>
                        <span>
                            <FaFacebookSquare />
                        </span>
                        <span>
                            <AiFillTwitterSquare />
                        </span>
                        <span>
                            <AiFillLinkedin />
                        </span>
                        <span>
                            <AiFillInstagram />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
