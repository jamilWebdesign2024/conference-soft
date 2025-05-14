import React, { Suspense } from 'react';
import ConferenceDetail from '../ConferenceDetail/ConferenceDetail';

const ConferenceDetails = ({consData}) => {
    // console.log(consData);
    
    return (
        <div>
            <h1>Our Services</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 p-7 rounded-xl'>
                        {
                            consData.map((detail)=><ConferenceDetail detail={detail} key={detail.id}></ConferenceDetail>)
                        }
                    </div>
            </Suspense>
        </div>
    );
};

export default ConferenceDetails;