import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">{name}!</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-5 mt-7'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs pointer-events-none" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{ slot }</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="number"  placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;