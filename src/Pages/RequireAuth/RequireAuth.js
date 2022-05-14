import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading'
import auth from '../../firebase.init'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (sending) {
        return <Loading></Loading>
    }
    const sendVerification = async () => {
        await sendEmailVerification();
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (user.providerData[0].providerId === "password" && user.emailVerified === false) {
        return <div className='text-center mt-14'>
            <h2 className='text-xl font-semibold my-2'>Please check and Verify your Email</h2>
            <p className='text-lg my-2'>After verification, reload the page</p>
            <p className='my-3'>or</p>
            <button onClick={sendVerification} className='bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-800'>Send Verification Again</button>
        </div>
    }
    return children;

};

export default RequireAuth;