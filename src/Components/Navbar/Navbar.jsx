import React from 'react';
import { Link, NavLink } from 'react-router';
import icon from '../../assets/logo.png'
import './Navbar.css';

const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/speakers">Speakers</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
</>

const Navbar = () => {
    return (
        <div className='sticky top-0 bottom-0 z-50 bg-sky-900 bg-o h-auto text-white font-bold'>
            {/* <nav className='flex items-center justify-between  w-11/12 mx-auto'> */}
                {/* <div>
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
                </div> */}

            <div className="navbar w-10/12 mx-auto ">
                    <div className="navbar-start">
                        
                        <h1 className='font-bold text-white text-2xl'><span className='text-orange-400'>NEXUS</span> SUMMIT</h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className=""></a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col items-start text-start gap-1">
                            {links}
                        </ul>
                        </div>
            </div>

            {/* </nav> */}
        </div>
    );
};

export default Navbar;




