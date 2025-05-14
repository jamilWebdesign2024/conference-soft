import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <button className='btn text-white bg-orange-600 hover:bg-orange-500 ml-3 text-medium md:text-semibold text-lg md:text-xl font-bold'>Ongoing Event</button>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam in voluptates error veritatis pariatur modi amet</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam in voluptates error veritatis pariatur modi amet</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam in voluptates error veritatis pariatur modi amet</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;
