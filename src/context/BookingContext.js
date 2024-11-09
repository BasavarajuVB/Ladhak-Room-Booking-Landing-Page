// context/BookingContext.js
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const today = new Date().toISOString().split('T')[0];
  
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: 1,
    name: '',
    phone: '',
    email: '',
    adults: 1,
    children: 0
  });

  const updateBookingData = (newData) => {
    setBookingData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData, today }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}