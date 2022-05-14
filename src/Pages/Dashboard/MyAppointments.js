import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div>
            <h2 className='text-sm ml-2 my-2'>Total Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(a => <tr>
                                <td>{a.patient}</td>
                                <td>{a.treatment}</td>
                                <td>{a.slot}</td>
                                <td>{a.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;