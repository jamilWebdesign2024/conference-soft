import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import icon from '../../assets/logo.png'
import './Navbar.css';
import { AuthContext } from '../../Provider/AuthProvder';
import { toast } from 'react-toastify';
import userIcon from '../../assets/user.png'

const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/register">Register</NavLink>
</>

const Navbar = () => {
    
    const {user, logOut}=use(AuthContext);

    const handleLogout =()=>{
        console.log("logout successfully");
        logOut().then(() => {
            toast.success("Logout Successfully")
        })
        .catch((error) => {
            console.log(error);
            
        });

    }

    return (
        <div className='sticky top-0 bottom-0 z-50 bg-sky-900 bg-o h-auto text-white font-bold'>
            
            <div className="navbar w-10/12 mx-auto ">
                    <div className="navbar-start">
                        
                        <h1 className='font-bold text-white text-2xl'><span className='text-orange-400'>NEXUS</span> SUMMIT</h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <a className="">{user && user.email}</a>
                        <img className='w-12 h-12 rounded-[50%]' src={`${user ? user.photoURL : userIcon}`} alt="" />
                        {
                            user ? <button onClick={handleLogout} className='btn bg-white text-black px-6 py-1'>Logout</button>
                            :  
                            <Link to="/auth/login"><button className='btn bg-white text-black px-6 py-1'>Login</button></Link>
                        }
                       
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




