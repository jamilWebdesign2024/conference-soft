import React from 'react';
import { Link, NavLink } from 'react-router';
import icon from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky top-0 bottom-0 z-50 bg-sky-900 bg-o h-auto text-white font-bold'>
            <nav className='flex items-center justify-between  w-11/12 mx-auto'>
                <div>
                    <img className='w-28 h-28' src={icon} alt="" />
                </div>
                <div className='space-x-10'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/speakers">Speakers</NavLink>
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="register">Register</NavLink>
                    
                </div>
                <div>
                    <Link><button className=''></button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


