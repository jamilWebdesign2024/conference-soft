import React from 'react';
import { useNavigate } from 'react-router';

const Detail = ({ detail }) => {

    const navigate = useNavigate();

  const {
    name,
    description,
    video,
    date,
    time,
    location,
    entryFee,
    organizer,
  } = detail;


  const getEmbedUrl = (url) => {
    const videoId = url?.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {video ? (
        <iframe
          className="w-full aspect-video rounded-t-lg mb-4"
          src={getEmbedUrl(video)}
          title={name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-red-500">No video available</p>
      )}
      <h2 className="text-3xl font-bold text-sky-800">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 space-y-1 text-gray-700">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Organizer:</strong> {organizer}</p>
        <p className="text-blue-600 text-xl font-bold mt-3">
          <strong>Entry Fee:</strong> {entryFee}
        </p>
        <div className='flex justify-end'>
            <button onClick={() => navigate('/')} className='bg-blue-500 rounded-xl px-7 py-2 cursor-pointer text-white'>Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;



