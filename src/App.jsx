// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection toggleModal={toggleModal} />
      {isModalOpen && <ReferralModal toggleModal={toggleModal}/>}
      <Footer />
    </div>
  );
};

export default App;
