import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='mt-40'>
            <div className="waves">
                <div className="wave" id='wave1'></div>
                <div className="wave" id='wave2'></div>
                <div className="wave" id='wave3'></div>
                <div className="wave" id='wave4'></div>
            </div>
            <ul className='social_icon'>
                <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/?hl=en"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a target='_blank' rel='noreferrer' href="https://www.facebook.com/matha.nosto.359/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a target='_blank' rel='noreferrer' href="https://github.com/AshrafulIslam5"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/al-amin-islam-atif-1445b723a/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
            <div className='flex flex-col md:flex-row gap-5 justify-around w-full'>
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
            </div>
            <h2 className='text-center my-7'>&copy; All rights reserved | Doctors Portal by Ashraful*</h2>
        </footer>
    );
};

export default Footer;



{/* <div>
                        <span className="text-accent">Services</span>
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
                    </div> */}