import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2>{review.review}</h2>
                <div className='flex items-center mt-4'>
                    <img className='w-11 md:w-[64px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2' src={review.img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold text-accent'>{review.name}</h3>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;