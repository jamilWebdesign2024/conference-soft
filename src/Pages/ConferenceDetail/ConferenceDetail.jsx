import React from 'react';
// import { Link, useNavigate } from 'react-router';
import { Link} from 'react-router';

const ConferenceDetail = ({detail}) => {

    // const navigate =useNavigate();

    const {id, thumbnail, name, category, date, location, entryFee, organizer, time, description}= detail;

    // const handleViewMore=()=>{
    //     navigate(`/details/${id}`)
    // };


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
                        <Link to={`/details/${id}`}>
                        <button className='btn bg-blue-800 text-white px-3 py-2'>View more</button>
                        {/* <button onClick={handleViewMore} className='btn bg-blue-800 text-white px-3 py-2'>View more</button> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConferenceDetail;