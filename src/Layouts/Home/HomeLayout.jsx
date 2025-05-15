import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import { Outlet } from 'react-router'; // ✅ correct
import Slider from '../../Pages/Slider/Slider';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Header />
                <section className='w-11/12 mx-auto my-3 rounded-xl bg-gray-200 border-1 border-gray-200'>
                    <LatestNews />
                </section>
            </header>

            <main>
                <Outlet /> {/* ✅ this is necessary to render child components */}

                <div className='mt-12 w-11/12 mx-auto p-7'>
                    <Slider/>
                </div>
            </main>


        </div>
    );
};

export default HomeLayout;
