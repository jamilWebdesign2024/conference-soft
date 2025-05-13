import React from 'react';
import { Link, NavLink } from 'react-router';
import icon from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky top-0 bottom-0'>
            <nav className='flex items-center justify-between py-3 w-11/12 mx-auto'>
                <div>
                    <img className='w-28 h-28' src={icon} alt="" />
                </div>
                <div className='space-x-10'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pages">Pages</NavLink>
                    <NavLink to="/speakers">Speakers</NavLink>
                    <NavLink to="/schedule">Schedule</NavLink>
                    <NavLink to="events">Events</NavLink>
                    <NavLink to="/features">Features</NavLink>
                </div>
                <div>
                    <Link><button className='btn btn-secondary bg-yellow-300 text-black border-none'>Log In</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;