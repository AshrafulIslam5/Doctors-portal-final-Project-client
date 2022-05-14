import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import noPfpUser from '../../../assets/icons/user.png'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    if (user?.photoURL === null) {
        user.photoURL = noPfpUser;
    }
    const menuItems = <>
        <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/'>Home</CustomLink>
        <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/about'>About</CustomLink>
        <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/appointment'>Appointment</CustomLink>
        <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/reviews'>Reviews</CustomLink>
        <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/contact'>Contact Us</CustomLink>
        {
            user && <CustomLink className="hover:bg-slate-300 mt-3 py-2 px-4 rounded-lg active:bg-primary" to='/dashboard'>Dashboard</CustomLink>
        }
        {user
            ?
            <div className="dropdown dropdown-end">
                <div tabIndex="0" className="avatar">
                    <div className="w-10 rounded-full ring hover:ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt='' />
                    </div>
                </div>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><p>{user.displayName}</p></li>
                    <li><button onClick={() => signOut(auth)}>Sign Out</button></li>
                </ul>
            </div>
            :
            <CustomLink className="hover:bg-slate-300 py-2 px-4 rounded-lg active:bg-primary" to='/login'>Login</CustomLink>
        }
    </>
    return (
        <div className='z-1002'>
            <div className="navbar bg-base-100 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'}><p className="btn btn-ghost normal-case text-xl">Doctors Portal</p></Link>
                </div>
                <div className="navbar-end hidden w-full lg:flex">
                    <div className="flex items-center gap-3 text-xl">
                        {menuItems}
                    </div>
                </div>
                <div className="navbar-end md:hidden">
                    <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;