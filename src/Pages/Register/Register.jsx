import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvder';

const Register = () => {
    const {createUser, setUser, updateUser}=use(AuthContext)
    const [nameError, setNameError]=useState("");

    const handleRegister =(e)=>{
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("name Should be more then 5 character");
            return;
        }else{
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            updateUser({displayName: name, photoURL: photo})
            .then(()=>{
                setUser({...user, displayName: name, photoURL: photo})
            }).catch((error) => {
            console.log(error);
            setUser(user)
            });
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            
        });

        
        
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-bold text-2xl text-center'>Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name input */}
                    <label className="label">Your Name</label>
                    <input 
                    type="text" 
                    name='name' 
                    required
                    className="input" 
                    placeholder="Your Name" />

                    {
                        nameError && <p className='text-xs text-error'>{nameError}</p>
                    }

                    {/* Photo url */}
                    <label className="label">Photo Url</label>
                    <input 
                    type="text" 
                    name='photo' 
                    required
                    className="input" 
                    placeholder="Photo url" />

                    {/* email input */}
                    <label className="label">Email</label>
                    <input 
                    type="email" 
                    name='email' 
                    required
                    className="input" 
                    placeholder="Your Email" />

                    {/* password input */}
                    <label className="label">Password</label>
                    <input 
                    type="password" 
                    name='password' 
                    required
                    className="input" 
                    placeholder="password" />
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='pt-5 font-semibold text-center'>Already have an account? <Link to="/auth/login" className='text-blue-600 underline'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;