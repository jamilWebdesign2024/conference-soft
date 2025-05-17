import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvder';

const Login = () => {

        const [error, setError]=useState("");

        const {signIn}=use(AuthContext);
        const location =useLocation();
        const navigate =useNavigate();
        console.log(location);
        
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password=form.password.value;
        console.log({email, password});

        signIn(email, password)
        .then((result)=>{
            const user =result.user;
            console.log(user);
            navigate(`${location.state? location.state : "/"}`)
        })
        .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage)
        setError(errorCode);
  });
        
        
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-bold text-2xl text-center'>Login Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* email input */}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        name='email' 
                        className="input" 
                        required
                        placeholder="Your Email" />

                        {/* password input */}
                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        name='password' 
                        className="input" 
                        required
                        placeholder="password" />
                        
                        <div><a className="link link-hover">Forgot password?</a></div>
                        
                        {error && <p className='text-red-400 text-xs'>{error}</p>}

                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='pt-5 font-semibold text-center'>Don't have an account ? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;