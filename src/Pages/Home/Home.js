import React from 'react';
import HomeAppointment from './Appointment/HomeAppointment';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;