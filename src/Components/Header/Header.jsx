import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="relative h-[65vh] flex items-center  justify-center text-center">
      {/* Overlay with background image from CSS */}
      <div className="background-image absolute inset-0 z-[-1]"></div>
      <div className="absolute inset-0 bg-gray-900/80 z-0"></div>

      {/* Content */}
      <div className="relative space-y-4 z-10 flex flex-col items-center px-4 max-w-4xl">
        <h2 className="text-5xl text-white font-bold mb-4">
          Welcome to <span className="text-orange-400">Foot</span>events
        </h2>
        <h3 className="font-semibold text-3xl text-orange-400">
          We are a team of professionals
        </h3>
        <h3 className="font-semibold text-3xl text-orange-400 mb-4">
          Working on football event managements since 2001
        </h3>
        <p className="font-semibold text-white text-2xl">
          with over 22 years experience and an enviable reputation, <br />
          we offer a highly professional and personal service.
        </p>
      </div>
    </div>
  );
};

export default Header;
