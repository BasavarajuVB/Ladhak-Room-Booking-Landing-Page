
// components/BookingBar/BookingBar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { FaArrowRight } from "react-icons/fa6";
import { toast } from 'react-toastify'; // Add this import
import '../../App.css';

function BookingBar({ showBookButton = true, handleSubmit, calculateTotalAmount, showControls = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingData, updateBookingData, today } = useBooking();
  
  const isSuccessPage = location.pathname === '/payment-success';

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    
    if (type === 'checkIn') {
        if (value < today) {
          toast.error("Check-in date cannot be in the past");
          return;
        }
        updateBookingData({
          checkIn: value,
          checkOut: value > bookingData.checkOut ? value : bookingData.checkOut
        });
      } else {
        if (value < bookingData.checkIn) {
            toast.error("Check-out date must be after check-in date");
            return;
          }
          updateBookingData({ checkOut: value });
        }
  };

  const handleRoomChange = (increment) => {
    const newRoomCount = Math.max(1, bookingData.rooms + increment);
    updateBookingData({ rooms: newRoomCount });
  };

  const handleBook = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
    toast.error("Please select both check-in and check-out dates");
      return;
    }
    navigate('/payment');
  };

  // Calculate total amount for success page
  const calculateSuccessAmount = () => {
    const nights = Math.ceil(
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) /
      (1000 * 60 * 60 * 24)
    );
    
    const PRICE_PER_NIGHT = 2500;
    const ADULT_PRICE = 500;
    const CHILD_PRICE = 250;
    
    const roomCost = PRICE_PER_NIGHT * nights * bookingData.rooms;
    const adultCost = ADULT_PRICE * bookingData.adults;
    const childCost = CHILD_PRICE * bookingData.children;
    const totalAmount = roomCost + adultCost + childCost;
  
    // Format the total amount with commas
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalAmount);
  };

  return (
    <div className="booking-bar">
      <div className="booking-option">
        <label>CHECK-IN</label>
        <input 
          type="date" 
          min={today}
          value={bookingData.checkIn}
          onChange={(e) => handleDateChange(e, 'checkIn')}
          disabled={isSuccessPage}
        />
      </div>
      <div className="divider"></div>
      <div className="booking-option">
        <label>CHECK-OUT</label>
        <input 
          type="date"
          min={bookingData.checkIn || today}
          value={bookingData.checkOut}
          onChange={(e) => handleDateChange(e, 'checkOut')}
          disabled={isSuccessPage}
        />
      </div>
      <div className="divider"></div>
      <div className="booking-option">
        <label>ROOMS</label>
        {showControls && !isSuccessPage ? (
          <div className="room-selector">
            <button 
              className="room-button"
              onClick={() => handleRoomChange(-1)}
            >-</button>
            <span className="room-count">{bookingData.rooms}</span>
            <button 
              className="room-button"
              onClick={() => handleRoomChange(1)}
            >+</button>
          </div>
        ) : (
          <span className="room-count">{bookingData.rooms}</span>
        )}
      </div>
      {isSuccessPage ? (
        <button className="book-button" onClick={handleBook}>
         {calculateSuccessAmount()}
        </button>
      ) : showBookButton ? (
        <button className="book-button" onClick={handleBook}>
          BOOK
        </button>
      ) : (
        <button 
          className="book-button payment-btn" 
          onClick={handleSubmit}
        >
          Pay {calculateTotalAmount()} <FaArrowRight  className="arrow-icon" size={20}/>
        </button>
      )}
    </div>
  );
}

export default BookingBar;