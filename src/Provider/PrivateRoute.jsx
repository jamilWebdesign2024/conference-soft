import React, { use } from 'react';
import { AuthContext } from './AuthProvder';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading}=use(AuthContext);
    // console.log(user);

    const location =useLocation();
    console.log(location);
    

    if(loading){
        return <Loading></Loading>
    }
    

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;


    // if->user thake return children
    

    // else navigate-->Login
};

export default PrivateRoute;