import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading';

const Verified = () => {
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (sending) {
        return <Loading></Loading>
    }
    const sendVerification = async () => {
        await sendEmailVerification();
    }
    return (
        <div className='text-center mt-14'>
            <h2 className='text-xl font-semibold my-2'>Please check and Verify your Email</h2>
            <p className='text-lg my-2'>After verification, reload the page</p>
            <p className='my-3'>or</p>
            <button onClick={sendVerification} className='bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-800'>Send Verification Again</button>
        </div>
    );
};

export default Verified;