import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className='card lg:max-w-lg g-base-100 shadow-xl text-center'>
            <div className='card-body'>
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Sorry. Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'services' : 'service'} available</p>
                <div className='card-actions justify-center'>
                    <button disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold disabled:btn-disabled disabled:bg-slate-600">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;