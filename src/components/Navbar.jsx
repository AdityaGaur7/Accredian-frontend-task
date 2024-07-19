// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyWebsite</div>
        <div>
          <a href="#home" className="px-4">Home</a>
          <a href="#about" className="px-4">About</a>
          <a href="#contact" className="px-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
