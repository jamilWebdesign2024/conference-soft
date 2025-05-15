import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import { Outlet } from 'react-router'; // ✅ correct
import Slider from '../../Pages/Slider/Slider';
import Footer from '../../Components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet /> 
            <Footer/>
        </div>
    );
};

export default HomeLayout;
