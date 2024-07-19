// src/components/HeroSection.js
import React from 'react';

const HeroSection = ({ toggleModal }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Refer & Earn</h1>
        <p className="text-xl mb-8">Refer a friend and earn rewards!</p>
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
          onClick={toggleModal}
        >
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
