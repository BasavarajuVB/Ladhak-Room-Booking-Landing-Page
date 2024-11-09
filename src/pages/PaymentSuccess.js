import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import BookingBar from '../components/BookingBar/BookingBar';

function PaymentSuccess() {
  const { bookingData } = useBooking();
  console.log(bookingData)
  return (
    <section className="payment-section">
      <div className="payment-details-container">
        <div className="payment-success-container">
          <div className="customer-details">
            <h2>{bookingData.name}</h2>
            <p>{bookingData.phone}</p>
            <p>{bookingData.email}</p>
            <p>{bookingData.adults} Adult{bookingData.adults > 1 ? 's' : ''} 
              {bookingData.children > 0 && ` and ${bookingData.children} Children`}</p>
          </div>
          <div className="divider"></div>
          <div className="order-status">
            <img src="/PaymentSuccessImage.png" alt="Success" className="success-icon" />
            <div className="order-success-content">
              <h2>Order Complete</h2>
              <p>Have questions? <Link to="#">Contact us</Link></p>
            </div>
          </div>
        </div>
      </div>
      <BookingBar showControls={false}/>
    </section>
  );
}

export default PaymentSuccess;