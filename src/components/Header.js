import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Mohamed Osman</h1>
        <p className="text-sm">Web Developer</p>
      </div>
     
      {children}
    </header>
  );
};

export default Header;
