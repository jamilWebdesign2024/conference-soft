import React from 'react';

const ConferenceDetail = ({detail}) => {

    const {id, thumbnail, name, category, date, location, entryFee, organizer, time, description}= detail;


    return (
        <div className='h-full'>
            <div className='bg-cyan-50 rounded-xl shadow-md flex flex-col h-full'>
                <img className='w-full h-[350px] rounded-tr-xl rounded-tl-xl object-cover' src={thumbnail} alt="" />
                <div className='p-7 space-y-3 flex flex-col flex-grow'>
                    <h3 className='text-2xl font-bold text-sky-800'>{name}</h3>
                    {/* <p>{date}</p> */}
                    {/* <p>{time}</p> */}
                    {/* <p>{location}</p> */}
                    <p className='text-gray-700 flex-grow'>{description}</p>
                    <p className='text-blue-600 font-bold italic text-2xl'>{entryFee}</p>
                    <div className='flex justify-end'>
                        <button className='btn bg-blue-800 text-white px-3 py-2'>View more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConferenceDetail;