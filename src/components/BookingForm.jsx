import React, { useState } from "react";
import "./BookingForm.css";
import { Box } from "@mui/material";
import { useNavigate, useHistory } from "react-router-dom";
import ConfirmationPage from "./ConfirmationPage";

const BookingForm = ({ hotel }) => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    arrivalDate: "", 
    departureDate: "", 
    totalPrice: "",
    totalPriceWithTax: "",
  });
  const [confirmationStatus, setConfirmationStatus] = useState(false); 


  const {
    name,
    email,
    address,
    arrivalDate,
    departureDate,
    totalPrice,
    totalPriceWithTax,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotalNights = () => {
    const arival = new Date(arrivalDate);
    const departure = new Date(departureDate);
    const totalNights = Math.ceil((departure - arival) / (1000 * 60 * 60 * 24));
    return totalNights;
  };

  const calculateTotalPrice = () => {
    const pricePerNight = hotel.pricePerNight;
    const totalNights = calculateTotalNights();
    return pricePerNight * totalNights;
  };
  const calculateTax = () => {
    const taxRate = 0.12; // 12%
    const totalPrice = calculateTotalPrice();
    return totalPrice * taxRate;
  };
  const calculateTotalWithTax = () => {
    const totalPrice = calculateTotalPrice();
    const taxAmount = calculateTax();
    return totalPrice + taxAmount;
  };
  // const sanitizeName = (value) => {
  //   return value.replace(/'/g, ""); // Remove apostrophes from the name
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const totalNights = calculateTotalNights();
    const totalPrice = calculateTotalPrice();
    const taxAmount = calculateTax();
    const totalPriceWithTax = calculateTotalWithTax();

    const data = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      arival: formData.arrivalDate,
      departure: formData.departureDate,
      totalPrice: totalPrice,
      totalPriceWithTax: totalPriceWithTax,
    };

    console.log(data); // Check if data object is correctly populated

    fetch("http://localhost:8082/travelor/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Booking data sent:", responseData);
        if (responseData.ok) {
          // setConfirmationStatus(true); 
         
        }
      })
      .catch((error) => {
        console.error("Error sending booking data:", error);
      });

      nav("/confirmationpage");
  };

  return (
    <Box className="booking">
      
      
      <h1>Please Fill the Form for Booking Your Stay</h1>
      <div className="booking-form-container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="arrivalDate">Arrival Date:</label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              value={arrivalDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={departureDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="pricePerNight">Price per Night:</label>
            <input
              type="text"
              id="pricePerNight"
              value={hotel.pricePerNight}
              readOnly
            />
          </div>

          <div className="form-field">
            <label htmlFor="totalNights">Total Nights:</label>
            <input
              type="text"
              id="totalNights"
              value={calculateTotalNights()}
              readOnly
            />
          </div>

          <div className="form-field">
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="text"
              id="totalPrice"
              value={calculateTotalPrice()}
              readOnly
            />
          </div>

          <div className="form-field">
            <label htmlFor="taxAmount">Tax (12%):</label>
            <input type="text" id="taxAmount" value={calculateTax()} readOnly />
          </div>

          <div className="form-field">
            <label htmlFor="totalPriceWithTax">
              Total Price (Including Tax):
            </label>
            <input
              type="text"
              id="totalPriceWithTax"
              value={calculateTotalWithTax()}
              readOnly
            />
            
          </div>
          
          <button
            type="submit"
            className="submit-button">
            Confirm My Stay
          </button>
        
        </form>
       
      </div>
      {confirmationStatus && <ConfirmationPage />}
    </Box>
     
  );
};

export default BookingForm;
