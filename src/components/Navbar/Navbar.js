// components/Navbar/Navbar.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">Brisphere</Link>
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#discover">Discover</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
        {/* Mobile Menu Icon */}
        <FaBars className="mobile-menu-icon" onClick={toggleSidebar} />
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <FaTimes className="close-icon" onClick={closeSidebar} />
        <ul className="nav-list-item">
          <li><a href="#discover">Discover</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>

      {/* Overlay */}
      <div 
        className={`overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={closeSidebar}
      />
    </>
  );
};

export default Navbar;