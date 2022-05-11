import React from 'react';
import HomeAppointment from './Appointment/HomeAppointment';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;