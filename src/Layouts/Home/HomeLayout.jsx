// import React from 'react';
// import Navbar from '../../Components/Navbar/Navbar';
// import Header from '../../Components/Header/Header';
// import LatestNews from '../../Components/LatestNews/LatestNews';
// import { Outlet } from 'react-router';

// const HomeLayout = () => {
//     return (
//         <div>
//             <header>
//                 <Navbar></Navbar>
//                 <Header></Header>
//                 <section className='w-11/12 mx-auto my-3 border-2 border-gray-200'>
//                     <LatestNews></LatestNews>
//                 </section>
//             </header>

//             <main>
                
//             </main>
//         </div>
//     );
// };

// export default HomeLayout;


import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import { Outlet } from 'react-router'; // ✅ correct

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Header />
                <section className='w-11/12 mx-auto my-3 border-2 border-gray-200'>
                    <LatestNews />
                </section>
            </header>

            <main>
                <Outlet /> {/* ✅ this is necessary to render child components */}
            </main>
        </div>
    );
};

export default HomeLayout;
