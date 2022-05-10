import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../../assets/icons/clock.svg';
import Location from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-40 px-10'>
                <InfoCard icon={Clock} classname={'bg-gradient-to-r from-secondary to-primary'} header={'Opening Hours'} content={'We are open from Sunday to Thursday every week!'}></InfoCard>
                <InfoCard icon={Location}  classname={'bg-accent'} header={'Visit our Location'} content={'Mirpur 1, besdie Shah Ali Majhar!'}></InfoCard>
                <InfoCard icon={Phone} classname={'bg-gradient-to-r from-secondary to-primary'} header={'Contact us now'} content={'+000 123 456789'}></InfoCard>
            </div>
        </div>
    );
};

export default Info;