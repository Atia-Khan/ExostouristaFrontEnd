import React from 'react';
import './ConfirmationPage.css';

const ConfirmationPage = ({ traveler }) => {
  const calculateTax = () => {
    const taxRate = 0.12; // 12% tax rate
    const totalWithTax = traveler.totalPrice * (1 + taxRate);
    const taxAmount = totalWithTax - traveler.totalPrice;
    return taxAmount;
  };

  const calculateTotalWithTax = () => {
    const taxRate = 0.12; // 12% tax rate
    const totalWithTax = traveler.totalPrice * (1 + taxRate);
    return totalWithTax;
  };

  return (
    <div className="confirmation-page">
      <h2>Confirmation Page</h2>
      <div className="traveler-info">
        <h3>Traveler Information</h3>
        <p>
          <strong>Name:</strong> {traveler.tName}
        </p>
        <p>
          <strong>Email:</strong> {traveler.email}
        </p>
        <p>
          <strong>Address:</strong> {traveler.address}
        </p>
        <p>
          <strong>Arrival Date:</strong> {traveler.arrival}
        </p>
        <p>
          <strong>Departure Date:</strong> {traveler.departure}
        </p>
        <p>
          <strong>Total Price:</strong> ${traveler.totalPrice}
        </p>
        <p>
          <strong>Tax (12%):</strong> ${calculateTax()}
        </p>
        <p>
          <strong>Total Price (Including Tax):</strong> ${calculateTotalWithTax()}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
