import React from 'react';
import './CSS/About.css';
import Prize from '../components/Prize';
import AboutTours from '../components/AboutTours';
import img1 from '../image/about-1.jpg';
import img2 from '../image/about-2.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='about-wrap'>
                <div className='about-image'>
                    <img src={img1}></img>
                </div>
                <div className='about-title'>
                    <h2>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip
                    </h2>
                </div>
                <Prize />
                <div className='about-title'>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </div>
                <div className='about-image'>
                    <img src={img2}></img>
                </div>
                <div className='about-content'>
                    <h2 className='about-content-title'>Meet our team</h2>
                    <h3>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip
                    </h3>
                    <p className='content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <p className='content-text'>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <br />

                    <AboutTours />
                    <div className='chef-contact'>
                        <h2>Thomas Palmer</h2>
                        <p>Washington Post – Feature</p>
                        <p>City Paper – Review</p>
                        <p>Alexandria Sun – Review</p>
                        <p>City Paper – Soft Opening Gallery</p>
                    </div>
                </div>
            </div>
            <div className='chef-footer'>
                <p className='chef-footer-text'>View</p>
                <span className='chef-footer-text'>The Menus</span>
                <p className='chef-footer-text'>and</p>
                <span className='chef-footer-text'>Make A Reservation</span>
            </div>
        </div>
    );
};

export default About;
