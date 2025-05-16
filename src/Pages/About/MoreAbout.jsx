import React from 'react';

const MoreAbout = ({more}) => {
    console.log(more);
    
    return (
        <div className='w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto text-justify p-5 ml-16'>
           <div>
                <div className='mt-7 space-y-4'>
                    <h1 className=' font-bold text-3xl text-sky-800'>{more.title}</h1>
                    <p className='text-justify text-xl text-gray-600'>{more.description}</p>
                </div>
                <ul className="list-disc list-inside ml-5 text-gray-700 mt-7 ">
                        <span className='font-semibold text-2xl'>Related-Books</span>
                        {more.related_books && more.related_books.map((book, index) => (
                            <li className='text-xl' key={index}>{book}</li>
                        ))}
                </ul>
                <div className='mt-7 space-y-4'>
                    <h3 className='text-3xl font-semibold'>Overview:</h3>
                    <p className='text-justify text-xl text-gray-600'>{more.overview}</p>
                </div>
           </div>
            <div className='flex items-center'>
                   <div>
                     <img src={more.image} alt="" />
                        <p className='font-semibold text-sky-800 text-center'>{more.title}</p>
                   </div>
            </div>
            
        </div>
    );
};

export default MoreAbout;