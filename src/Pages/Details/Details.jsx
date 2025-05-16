import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const details = useLoaderData();
    console.log(details);
    

    return (
        <div>

            {
                details.length === 0 && (<div><div/>)
            }
            
        </div>
    );
};

export default Details;