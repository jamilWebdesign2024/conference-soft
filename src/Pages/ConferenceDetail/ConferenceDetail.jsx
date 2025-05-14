import React from 'react';

const ConferenceDetail = ({detail}) => {

    const {id, thumbnail, name, category, date, location, entryFee, organizer, time, description}= detail;


    return (
        <div>
            <div className='h-auto bg-amber-50 rounded-xl space-y-3 rounded-xl shadow-md'>
                <img className='w-full h-[350px] rounded-tr-xl rounded-tl-xl' src={thumbnail} alt="" />
                <div className='p-7'>
                    <h3>{name}</h3>
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{location}</p>
                    <p>{description}</p>
                    <p><small>{entryFee}</small></p>
                    <div>
                        <button className='btn btn-secondary px-3 py-2'>View more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConferenceDetail;