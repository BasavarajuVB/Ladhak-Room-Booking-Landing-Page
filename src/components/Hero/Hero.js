// components/Hero/Hero.js
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import BookingBar from '../BookingBar/BookingBar';
import '../../App.css';
function Hero() {
  return (
    <section className="hero">
      <div className="home-details-container">
        <div className="hero-content">
          <div className="text-content">
            <h1>Work from<br />Ladakh</h1>
            <p>India's first true digital tourism ecosystem</p>
            <div className="social-icons">
              <a href="#"><FaFacebook size={35} /></a>
              <a href="#"><RiInstagramFill size={40}/></a>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img
            src="https://img.freepik.com/free-photo/small-town-near-blue-body-water-surrounded-by-beautiful-mountains_181624-4768.jpg"
            alt="Ladakh scenery"
          />
        </div>
      </div>
      <BookingBar />
    </section>
  );
}

export default Hero;