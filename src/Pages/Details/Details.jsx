import React, { useEffect, useRef } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import Detail from './Detail';
import { toast } from 'react-toastify';

const Details = () => {
  const { id } = useParams(); 
  const details = useLoaderData();
  const navigate = useNavigate();

  const selectedDetail = id ? details.find(detail => String(detail.id) === id) : null;


const hasShownToast = useRef(false);

useEffect(() => {
  if (id && selectedDetail && !hasShownToast.current) {
    toast.success(`${selectedDetail.name} loaded Successfully`);
    hasShownToast.current = true;
  }
}, [id, selectedDetail]);


  if (id && !selectedDetail) {
    return (
      <div className='p-10 text-center text-xl font-semibold text-red-500 bg-red-50 rounded-md'>
        No detail found with this ID.
      </div>
    );
  }

  if (!id) {
    return (
      <div className='mx-auto mt-10 px-5 min-h-screen py-10'>
        <div className='w-10/12 mx-auto h-auto bg-cyan-50 p-7 rounded-2xl border-2 border-white text-center space-y-7'>
            <h1 className='text-5xl font-bold text-sky-800'>No details yet.</h1>
            <button onClick={() => navigate('/')} className='bg-blue-500 rounded-xl px-7 py-2 cursor-pointer text-white'>Select One Detail</button>
        </div>

        
        </div>
    );
  }


  return <Detail detail={selectedDetail} />;
};

export default Details;
