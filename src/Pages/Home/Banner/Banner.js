import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen Myoverlay">
                <div className="hero-content flex-col lg:flex-row-reverse px-5 md:px-10">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-2xl md:text-6xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Book a Dentist Appointment with us now. At Marketplace Dentistry, we make that visit to the dentist a truly pleasant experience. Friendly. Reassuring. Deeply knowledgeable about any dental or oral health issue.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;