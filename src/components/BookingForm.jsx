import React, { useState } from 'react';
import './BookingForm.css';
import { Box } from "@mui/material";

const BookingForm = ({ hotel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const calculateTotalNights = () => {
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);
    const totalNights = Math.ceil((departure - arrival) / (1000 * 60 * 60 * 24));

    return totalNights;
  };

  const calculateTotalPrice = () => {
    const pricePerNight = hotel.pricePerNight;
    const totalNights = calculateTotalNights();

    return pricePerNight * totalNights;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPrice = calculateTotalPrice();
    const totalNights = calculateTotalNights();

    const data = {
      tName: name,
      email: email,
      address: address,
      arrival: arrivalDate,
      departure: departureDate,
      totalPrice: totalPrice
    };

    
  };

  return (
    <>
    <Box>
    <h1>Please Fill the Form for Booking Your Stay</h1>
    <div className="booking-form-container">
      
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-field">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div className="form-field">
          <label htmlFor="arrivalDate">Arrival Date:</label>
          <input type="date" id="arrivalDate" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} required />
        </div>

        <div className="form-field">
          <label htmlFor="departureDate">Departure Date:</label>
          <input type="date" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
        </div>

        <div className="form-field">
          <label htmlFor="pricePerNight">Price per Night:</label>
          <input type="text" id="pricePerNight" value={hotel.pricePerNight} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="totalNights">Total Nights:</label>
          <input type="text" id="totalNights" value={calculateTotalNights()} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="totalPrice">Total Price:</label>
          <input type="text" id="totalPrice" value={calculateTotalPrice()} readOnly />
        </div>

        <button type="submit" className="submit-button">Confirm My Stay</button>
      </form>
    </div>
    </Box>
    </>
  );
};

export default BookingForm;
