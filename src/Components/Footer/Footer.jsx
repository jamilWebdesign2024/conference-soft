import React from 'react';
import { NavLink } from 'react-router';
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='bg-blue-900 p-7 text-white font-semibold text-center space-y-5 mt-12'>
            <h1><span>Foot</span>events</h1>
            <div className='flex items-center justify-center gap-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/speakers">Enroll</NavLink>
                <NavLink to="login">Login</NavLink>
                <NavLink to="register">Register</NavLink>
            </div>
            <div className='flex items-center justify-center gap-5 mt-5'>
                    <a href='https://www.facebook.com/skudbjuj' target='_blank' rel='noopener noreferrer'>
                        <span className='text-2xl text-blue-700'><SiFacebook /></span>
                        </a>
                        <a href='https://www.linkedin.com/in/md-jamil-uddin-9886b4303/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-blue-700'><FaLinkedin /></span>
                        </a>
                        <a href='www.youtube.com/@MDJAMILUDDINJISHAN' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl text-red-700'><IoLogoYoutube /></span>
                        </a>
                        <a href='https://www.instagram.com/jamiluddinjishan/' target='_blank' rel='noopener noreferrer'>
                            <span className='text-2xl'><PiInstagramLogoFill /></span>
                        </a>
                        
                    </div>
            <p><small>Copyright © 2025 - All right reserved by Footevents</small></p>
        </div>
    );
};

export default Footer;