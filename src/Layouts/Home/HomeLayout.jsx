import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Header></Header>
            </header>
        </div>
    );
};

export default HomeLayout;