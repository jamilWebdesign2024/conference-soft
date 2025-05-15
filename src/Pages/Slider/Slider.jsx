import React from 'react';

const Slider = () => {
    return (
        <div className=''>
           <div className="carousel w-full rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/5NK3BbPp/digital-blue-hud-interface-global-concept.jpg"
                    className="w-full h-[600px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/YC4x8ZZ7/it-professionals-using-artificial-intelligence-augmented-reality-hologram.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/d3qBB1PN/digital-marketing-with-icons-business-people.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/k4W1szVG/business-crowdfunding.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/W1Vw3HMw/handicapped-woman-with-walking-frame-wearing-protective-mask-against-coronavirus.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/QtKTSQQM/low-angle-female-meeting-office.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/d38TcJSP/beautiful-cryptocurrency-hologram-design.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/NfcH7r5g/happy-businesswoman-giving-presentation-natural-resources-his-colleagues.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide9" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/GpW2LZDc/representations-user-experience-interface-design.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide10" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/TYt3LybN/cloud-computing-technology-online-data-storage.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide11" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/gjNmZ5xL/infantry-unit-leader-examines-big-data-screen-military-monitoring-room.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide12" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/qvqpBWjy/business-analytics.jpg"
                    className="w-full h-[350px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;


