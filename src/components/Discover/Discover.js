// components/Discover/Discover.js
import React from 'react';
import '../../App.css';
function Discover() {
  return (
    <div className="discover-container" id="discover">
      <h1 className="discover-heading">Discover</h1>
      <div className="card-container">
        <div className="card">
          <div className="profile-info">
            <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="profile" className="profile-img"/>
            <div className="name-rating">
              <h3>Arjun Raghav</h3>
              <p className="rating">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <p className="description">
            I am writing this after reflecting on my one month stay with Bricabin in Ladakh. 
            Right from picking us up at the airport to dropping us back there after a month, 
            Urgan was very responsible and took good care of my friends and me. 
            <a href="#">read more</a>
          </p>
        </div>

        <div className="card-large">
          <img 
            src="https://img.freepik.com/free-photo/small-town-near-blue-body-water-surrounded-by-beautiful-mountains_181624-4768.jpg?" 
            alt="landscape" 
            className="landscape-img"
          />
          <div className="card">
            <div className="profile-info">
              <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="profile" className="profile-img"/>
              <div className="name-rating">
                <h3>Anand Solanki</h3>
                <p className="rating">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="description">
              I am writing this after reflecting on my one month stay with Bricabin in Ladakh. 
              Right from picking us up at the airport to dropping us back there after a month, 
              Urgan was very responsible and took good care of my friends and me. 
              <a href="#">read more</a>
            </p>
          </div>
        </div>

        <div className="two-cards-container">
          {/* Additional review cards */}
          {[1, 2].map((_, index) => (
            <div className="card" key={index}>
              <div className="profile-info">
                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="profile" className="profile-img"/>
                <div className="name-rating">
                  <h3>Arjun Raghav</h3>
                  <p className="rating">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="description">
                I am writing this after reflecting on my one month stay with Bricabin in Ladakh. 
                Right from picking us up at the airport to dropping us back there after a month, 
                Urgan was very responsible and took good care of my friends and me. 
                <a href="#">read more</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;