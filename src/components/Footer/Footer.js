// components/Footer/Footer.js
import React from 'react';
import '../../App.css';
function Footer() {
  return (
    <div className="app-container" id='contact-us'>
      <div className="location-container">
        <h2 className="location-title">Brisphere</h2>
        <p className="location-address">Spituk, Ladakh,</p>
        <p className="location-address">India, 194101</p>
        <p className="location-phone">+91 - 7764997033</p>
        <p className="location-email">amit.jha6700@gmail.com</p>
        <button className="location-button">Location</button>
      </div>
    </div>
  );
}

export default Footer;