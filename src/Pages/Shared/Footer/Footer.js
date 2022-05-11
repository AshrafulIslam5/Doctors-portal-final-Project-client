import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerBG'>
            <div>
                <footer className="footer p-10">
                    <div>
                        <span className="footer-title text-accent">Services</span>
                        <p className='text-neutral'>Emergency Checkup</p>
                        <p className='text-neutral'>Monthly Checkup</p>
                        <p className='text-neutral'>Weekly Checkup</p>
                        <p className='text-neutral'>Deep Checkup</p>
                    </div>
                    <div>
                        <span className="footer-title text-accent">Oral Health</span>
                        <p className='text-neutral'>Fluoride Treatment</p>
                        <p className='text-neutral'>Cavity Filling</p>
                        <p className='text-neutral'>Teath Whitening</p>
                    </div>
                    <div>
                        <span className="footer-title text-accent">Our Address</span>
                        <p className='text-neutral'>Mirpur 1, beside Shah Ali Majhar</p>
                    </div>
                </footer>
                <p className='text-center mt-14 pb-4'>&copy; Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;