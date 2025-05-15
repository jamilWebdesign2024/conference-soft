import React, { Suspense, useState } from 'react';
import ConferenceDetail from '../ConferenceDetail/ConferenceDetail';

const ConferenceDetails = ({consData}) => {
    const [showAll, setShowAll]=useState(false);
    const visibleConference = showAll ? consData : consData.slice(0, 6);
    // console.log(consData);
    
    return (
        <div className='mt-12'>
            <h1 className='mb-12 font-bold text-4xl text-center'>Our Services</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 p-7 rounded-xl w-11/12 mx-auto'>
                        {
                            visibleConference.map((detail)=><ConferenceDetail detail={detail} key={detail.id}></ConferenceDetail>)
                        }
                    </div>
            </Suspense>

            {
                consData.length > 6 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 mb-12 bg-blue-800  hover:bg-cyan-900 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                        >
                            {showAll ? 'View Less' : 'View All'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default ConferenceDetails;