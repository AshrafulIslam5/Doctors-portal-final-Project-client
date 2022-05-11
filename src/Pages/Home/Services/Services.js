import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import fluoride from '../../../assets/images/fluoride.png';

const Services = () => {
    return (
        <div>
            <h2 className='text-center text-2xl text-secondary'>Our Services</h2>
            <h2 className='text-center text-4xl text-accent'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-40 px-10 mt-20'>
                <Service icon={fluoride} header={'Fluoride Treatment'} content={'We Have experts in fluoride problems'}></Service>
                <Service icon={cavity} header={'Cavity Filling'} content={'Most of the people around us come here for cavity filling'}></Service>
                <Service icon={whitening} header={'Teeth Whitening'} content={'We can help you get back your White old teeths'}></Service>
            </div>
        </div>
    );
};

export default Services;