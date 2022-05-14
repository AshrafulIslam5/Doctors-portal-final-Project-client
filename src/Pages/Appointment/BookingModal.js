import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './BookingModal.css'
import { toast } from 'react-toastify'

const BookingModal = ({ refetch, treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP')
    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(_id, name, slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user?.displayName,
            patientEmail: user?.email,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.info(`Booked on ${formattedDate} at ${slot}`, {
                        icon: false
                    })
                    refetch()
                    // to close modal
                    setTreatment(null)
                }
                else {
                    toast.error(`Already booked on ${data?.booking?.date}`)
                }
            })

    }
    const [user] = useAuthState(auth)
    return (
        <div className='z-1001'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">{name}!</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-7'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs pointer-events-none" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="email" value={user.email || ''} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;