import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import './HomeAppointment.css';

const HomeAppointment = () => {
    return (
        <div class="min-h-screen mt-52">
            <div class="flex flex-col lg:flex-row appointment-bg justify-center items-center">
                <img src={doctor} className={`hidden md:block max-w-xl md:mt-[-120px]`} alt='' />
                <div className='text-white p-20 md:p-0 md:px-32'>
                    <h2 className='text-secondary font-bold'>Appointment</h2>
                    <h1 class="text-5xl font-bold">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;