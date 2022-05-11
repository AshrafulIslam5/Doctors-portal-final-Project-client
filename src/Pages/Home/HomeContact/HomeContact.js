import React from 'react';
import './HomeContact.css'
const HomeContact = () => {
    const handleSubmit = e =>{
        e.preventDefault();
}
    return (
        <div className='appointment-bg mb-40 text-center py-10'>
            <h2 className='text-secondary'>Contact Us</h2>
            <h2 className='text-white text-3xl'>Stay Connected with us</h2>
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full mx-auto max-w-lg bg-transparent">
                <div class="card-body">
                        <input type="text" placeholder="Email Address" class="input input-bordered focus:outline-primary" />
                    <input type="text" placeholder="Subject" class="input input-bordered focus:outline-primary" />
                    <textarea class="textarea textarea-primary" rows="5" placeholder="Your message"></textarea>
                    <div class="form-control mx-auto mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold px-9">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HomeContact;