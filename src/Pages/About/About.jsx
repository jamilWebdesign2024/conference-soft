import React from 'react';
// import { useLoaderData } from 'react-router';

// const About = () => {
//     const overviewData =useLoaderData();
//     console.log(overviewData);
    
//     return (
//         <div className='w-11/12 mx-auto p-7'>
//            <h1 className='font-bold text-5xl text-sky-700 mt-12'> Nexus Summit 2025</h1>
//            <h2 className='w-11/12 text-justify p-10 ml-10 font-bold text-3xl'>Company history</h2>
//             <p className='w-11/12 text-justify px-10 text-xl ml-10 text-gray-600'>Nexus Summit 2025 brings together global leaders, educators, practitioners, researchers, and students in a shared mission to advance interprofessional practice and education for better health outcomes. The summit is a landmark gathering that explores innovative strategies for collaborative care, academic-community partnerships, evidence-based learning, and the development of leadership in interdisciplinary health systems. This year’s Summit emphasizes engagement, innovation, partnership, and outcomes through a series of dynamic sessions, workshops, keynote presentations, and collaborative forums. Participants will delve into the pressing challenges and opportunities shaping the future of healthcare and education, and engage in co-creating models that matter most to individuals, families, and communities. Nexus Summit 2025 is not just an event—it's a movement to connect people, ideas, and systems across professions and disciplines for lasting impact.</p>

//             <div>
//                 {
//                     <h1>{overviewData.title}</h1>;
//                     <p>{overviewData.description}</p>;
//                     <p>{overviewData.related_books[0, 1, 2]}</p>;
//                     <p>{overviewData.overview}</p>;

//                 }
                
//             </div>
//         </div>
//     );
// };

// export default About;


import { useLoaderData } from 'react-router';
import MoreAbout from './MoreAbout';

const About = () => {
    const overviewData = useLoaderData();
    // console.log(overviewData);
    
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-5xl text-sky-700 mt-12'>🌐 Nexus Summit 2025</h1>
            
            <h2 className='text-justify p-10 ml-10 font-bold text-3xl'>Company history</h2>
            <p className='text-justify px-10 text-xl ml-10 text-gray-600'>
                Nexus Summit 2025 brings together global leaders, educators, practitioners, researchers, and students 
                in a shared mission to advance interprofessional practice and education for better health outcomes. 
                The summit is a landmark gathering that explores innovative strategies for collaborative care, academic-community 
                partnerships, evidence-based learning, and the development of leadership in interdisciplinary health systems. 
                This year’s Summit emphasizes engagement, innovation, partnership, and outcomes through a series of dynamic 
                sessions, workshops, keynote presentations, and collaborative forums. Participants will delve into the pressing 
                challenges and opportunities shaping the future of healthcare and education, and engage in co-creating models 
                that matter most to individuals, families, and communities. Nexus Summit 2025 is not just an event—it's a movement 
                to connect people, ideas, and systems across professions and disciplines for lasting impact.
            </p>

            <div className='w-11/12 mt-5'>
                {/* <h2 className="text-4xl font-bold text-sky-600">{overviewData.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{overviewData.overview}</p>
                <p className="mt-4 text-md text-gray-600">{overviewData.description}</p>

                <h3 className="mt-6 text-xl font-semibold text-gray-800">📚 Related Books:</h3>
                <ul className="list-disc list-inside ml-5 mt-2 text-gray-700">
                    {overviewData.related_books && overviewData.related_books.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ul> */}

                {
                    overviewData.map((more)=><MoreAbout key={more.id} more={more}></MoreAbout>)
                }
            </div>
        </div>
    );
};

export default About;
