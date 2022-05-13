import React, { useState } from 'react';
import AvailableAppointments from './AvailableAppointments';
import AppointmentBanner from './Banner/Banner'
import Footer from '../Shared/Footer/Footer'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;