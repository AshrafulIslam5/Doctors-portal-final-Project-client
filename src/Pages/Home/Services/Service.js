import React from 'react';

const Service = ({icon, header, content}) => {
    return (
        <div className='card shadow-xl px-6 py-8 md:py-3'>
        <figure><img src={icon} alt="Album" /></figure>
        <div class="card-body text-center">
            <h2 className='text-2xl font-semibold'>{header}</h2>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default Service;