import React from 'react';

const Slider = () => {
    return (
        <div className=''>
           <div className="carousel w-full rounded-2xl">
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/5NK3BbPp/digital-blue-hud-interface-global-concept.jpg"
                    className="w-full h-[]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/YC4x8ZZ7/it-professionals-using-artificial-intelligence-augmented-reality-hologram.jpg"
                    className="w-full h-auto" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/d3qBB1PN/digital-marketing-with-icons-business-people.jpg"
                    className="w-full h-auto" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://i.postimg.cc/k4W1szVG/business-crowdfunding.jpg"
                    className="w-full h-auto" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}

                <div className="carousel w-full rounded-2xl h-[400px] bg-[#1e293b]">
  <div id="slide1" className="carousel-item relative w-full h-full flex items-center justify-center">
    <img
      src="https://i.postimg.cc/5NK3BbPp/digital-blue-hud-interface-global-concept.jpg"
      className="h-full object-contain"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full h-full flex items-center justify-center">
    <img
      src="https://i.postimg.cc/YC4x8ZZ7/it-professionals-using-artificial-intelligence-augmented-reality-hologram.jpg"
      className="h-full object-contain"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full h-full flex items-center justify-center">
    <img
      src="https://i.postimg.cc/d3qBB1PN/digital-marketing-with-icons-business-people.jpg"
      className="h-full object-contain"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full h-full flex items-center justify-center">
    <img
      src="https://i.postimg.cc/k4W1szVG/business-crowdfunding.jpg"
      className="h-full object-contain"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

                
            </div>
        </div>
    );
};

export default Slider;


