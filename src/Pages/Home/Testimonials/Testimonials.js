import React from 'react';
import quotes from '../../../assets/icons/quote.svg';
import user1 from '../../../assets/images/people1.png';
import user2 from '../../../assets/images/people2.png';
import user3 from '../../../assets/images/people3.png';
import Review from './Review';

const reviews = [
    {
        _id: 1,
        name: 'Winson Herry',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California',
        img: user1
    },
    {
        _id: 2,
        name: 'Scara Kim',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'Korea',
        img: user2
    },
    {
        _id: 3,
        name: 'Bella Porche',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'Germany',
        img: user3
    }
]


const Testimonials = () => {
    return (
        <div className='mb-52 px-20'>
            <div className='flex justify-between mb-3'>
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonials</h2>
                    <h2 className='text-3xl font-semibold'>What Our Patients Say</h2>
                </div>
                <div className='w-2/12'>
                    <img src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;