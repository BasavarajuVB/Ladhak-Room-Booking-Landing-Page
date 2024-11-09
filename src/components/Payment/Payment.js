
// components/Payment/Payment.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { toast } from 'react-toastify'; 
import '../../App.css';
import BookingBar from '../BookingBar/BookingBar';

function Payment() {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const [errors, setErrors] = useState({});

  const PRICE_PER_NIGHT = 2500;
  const ADULT_PRICE = 500;
  const CHILD_PRICE = 250;

  const calculateTotalAmount = () => {
    const nights = Math.ceil(
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) /
      (1000 * 60 * 60 * 24)
    );
    
    const roomCost = PRICE_PER_NIGHT * nights * bookingData.rooms;
    const adultCost = ADULT_PRICE * bookingData.adults;
    const childCost = CHILD_PRICE * bookingData.children;
    
    const totalAmount = roomCost + adultCost + childCost;

    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalAmount);

  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!bookingData.name.trim()) {
      newErrors.name = 'Name is required';
      toast.error("Name is required");
    }
    
    if (!bookingData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      
      toast.error("Phone number is required");
    }else if (!/^\d{10}$/.test(bookingData.phone.trim())) {
        newErrors.phone = 'Phone number must have exactly 10 digits';
        toast.error("Phone number must have exactly 10 digits");
      }
    
    if (!bookingData.email.trim()) {
      newErrors.email = 'Email is required';
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(bookingData.email)) {
      newErrors.email = 'Email is invalid';
      toast.error("Please enter a valid email address");
    }
    
    if (!bookingData.adults || bookingData.adults < 1) {
      newErrors.adults = 'At least 1 adult is required';
      toast.error("At least 1 adult is required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate('/payment-success');
      toast.success("Payment successful! Booking confirmed.");
    } else {
    //   toast.warning('Please fill in all required fields correctly');
    setErrors("Please fill in all required fields correctly")
    }
  };

  return (
    <div>
      <section className="payment-section">
        <div className="payment-details-container">
          <div className="payment-inputs-container">
            <div className="inputs-container">
              <div className="input-group">
                <input 
                  type="text" 
                  value={bookingData.name}
                  onChange={(e) => updateBookingData({ name: e.target.value })}
                  className={`input-field ${errors.name ? 'error' : ''}`}
                  placeholder="Full Name *"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="input-group">
                <input 
                  type="tel" 
                  value={bookingData.phone}
                  onChange={(e) => updateBookingData({ phone: e.target.value })}
                  className={`input-field ${errors.phone ? 'error' : ''}`}
                  placeholder="Phone Number *"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
            <div className="inputs-container">
              <div className="input-group">
                <input 
                  type="email" 
                  value={bookingData.email}
                  onChange={(e) => updateBookingData({ email: e.target.value })}
                  className={`input-field ${errors.email ? 'error' : ''}`}
                  placeholder="Email Address *"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="peoples-count-info">
                <div className="people-count">
                  <input 
                    type="number" 
                    min="1" 
                    value={bookingData.adults}
                    onChange={(e) => updateBookingData({ adults: parseInt(e.target.value) || 0 })}
                    className={`people-input ${errors.adults ? 'error' : ''}`}
                  />
                  <span className="label">Adult *</span>
                  {errors.adults && <span className="error-message">{errors.adults}</span>}
                </div>
                <div className="people-count">
                  <input 
                    type="number" 
                    min="0" 
                    value={bookingData.children}
                    onChange={(e) => updateBookingData({ children: parseInt(e.target.value) || 0 })}
                    className="people-input"
                  />
                  <span className="label">Children</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookingBar 
          showBookButton={false} 
          handleSubmit={handleSubmit} 
          calculateTotalAmount={calculateTotalAmount} 
        />
      </section>
    </div>
  );
}

export default Payment;