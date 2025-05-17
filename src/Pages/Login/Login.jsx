import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-bold text-2xl text-center'>Login Your Account</h1>
                <div className="card-body">
                    <form className="fieldset">
                    {/* email input */}
                    <label className="label">Email</label>
                    <input 
                    type="email" 
                    name='email' 
                    className="input" 
                    placeholder="Your Email" />

                    {/* password input */}
                    <label className="label">Password</label>
                    <input 
                    type="password" 
                    name='password' 
                    className="input" 
                    placeholder="password" />
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='pt-5 font-semibold text-center'>Don't have an account ? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;