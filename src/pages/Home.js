// pages/Home.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import Discover from '../components/Discover/Discover';
import Services from '../components/Services/Services';

function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <Services />
    </>
  );
}

export default Home;