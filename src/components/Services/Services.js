// components/Services/Services.js
import React from 'react';
import { FaWifi, FaUtensils, FaHome, FaCar, FaBicycle, FaMapMarkedAlt, FaBriefcase, FaTruck, FaShoppingCart } from 'react-icons/fa';
import '../../App.css';

const services = [
    { icon: <FaWifi />, title: "High Speed Internet", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaUtensils />, title: "Healthy Meals", description: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere." },
    { icon: <FaHome />, title: "Homely Stay", description: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space." },
    { icon: <FaCar />, title: "Transportation", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaBicycle />, title: "Food Delivery", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaMapMarkedAlt />, title: "Tourism", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaBriefcase />, title: "Job", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaTruck />, title: "Rental Service", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: <FaShoppingCart />, title: "Online Shop", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
  ];
  

function Services() {
  return (
    <div className="services-container" id="services">
      <h1 className="services-title">Services</h1>
      <div className="services-card-container">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="services-icon">{service.icon}</div>
            <h3 className="services-card-title">{service.title}</h3>
            <p className="services-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;