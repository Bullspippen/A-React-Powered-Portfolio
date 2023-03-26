import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Mohamed Osman</h1>
        <p className="text-sm">Web Developer</p>
      </div>
      <nav className="space-x-4 text-gray-300 text-sm">
        <NavLink
          to="/"
          exact
          className="hover:text-white hover:border-white"
          activeClassName="text-white border-b-2 border-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-white hover:border-white"
          activeClassName="text-white border-b-2 border-white"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="hover:text-white hover:border-white"
          activeClassName="text-white border-b-2 border-white"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-white hover:border-white"
          activeClassName="text-white border-b-2 border-white"
        >
          Contact
        </NavLink>
      </nav>
      {children}
    </header>
  );
};

export default Header;
