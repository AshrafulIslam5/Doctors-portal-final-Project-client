import React, { useState } from 'react';
import AvailableAppointments from './AvailableAppointments';
import AppointmentBanner from './Banner/Banner'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;