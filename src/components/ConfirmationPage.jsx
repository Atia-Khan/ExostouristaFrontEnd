import React from "react";
import "./confirmation.css"; 
import {  Link } from "react-router-dom";
import { Button } from "@mui/material";

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h2>You have successfully confirmed your stay at our hotel.</h2>
      <p>Thank you for choosing our hotel. We look forward to hosting you!</p>

      <Button 
variant="contained"
color="primary"
component={Link}
to="/"
className="button">
Return to Search Page
</Button>
    </div>


  );
};

export default ConfirmationPage;
