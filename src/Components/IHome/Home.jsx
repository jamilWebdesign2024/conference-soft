import React from 'react';
import { useLoaderData } from 'react-router'; // ✅ correct
import ConferenceDetails from '../../Pages/ConferenceDetails/ConferenceDetails';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Slider from '../../Pages/Slider/Slider';

const Home = () => {
    const consData = useLoaderData();
    // console.log(consData);

   

    return (
        <div>
            <Header />
            <section className='w-11/12 mx-auto my-3 rounded-xl bg-gray-200 border-1 border-gray-200'>
                    <LatestNews />
                </section>
            <ConferenceDetails consData={consData} />
            <div className='mt-12 w-11/12 mx-auto p-7'>
                    <Slider/>
                </div>
        </div>
    );
};

export default Home;
