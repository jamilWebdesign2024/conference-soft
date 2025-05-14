// import React from 'react';
// import ConferenceDetails from '../../Pages/ConferenceDetails/ConferenceDetails';
// import { useLoaderData } from 'react-router';

// const Home = () => {
//     const consData = useLoaderData();
//     console.log(consData);
    
//     return (
//         <div>
//             <ConferenceDetails consData={consData}></ConferenceDetails>
//         </div>
//     );
// };

// export default Home;


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
