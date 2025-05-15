import React from 'react';
import { useLoaderData } from 'react-router'; // ✅ correct
import ConferenceDetails from '../../Pages/ConferenceDetails/ConferenceDetails';

const Home = () => {
    const consData = useLoaderData();
    // console.log(consData);

    return (
        <div>
            <ConferenceDetails consData={consData} />
        </div>
    );
};

export default Home;
