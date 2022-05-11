import React from 'react';
import './HomeContact.css'
const HomeContact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className='appointment-bg text-center py-10'>
            <h2 className='text-secondary'>Contact Us</h2>
            <h2 className='text-white text-3xl'>Stay Connected with us</h2>
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full mx-auto max-w-lg bg-transparent">
                <div className="card-body">
                    <input type="text" placeholder="Email Address" className="input input-bordered focus:outline-primary hover:border-primary" />
                    <input type="text" placeholder="Subject" className="input input-bordered focus:outline-primary hover:border-primary" />
                    <textarea className="textarea focus:textarea-primary hover:textarea-primary" rows="5" placeholder="Your message"></textarea>
                    <div className="form-control mx-auto mt-6">
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold px-9">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HomeContact;