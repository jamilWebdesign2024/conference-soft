import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import { Outlet } from 'react-router'; // ✅ correct
import Slider from '../../Pages/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet /> 
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer/>
        </div>
    );
};

export default HomeLayout;
