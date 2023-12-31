

import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import {  Link } from 'react-router-dom';
import BookingForm from "./BookingForm";
import "./resultList.css";

const ResultList = ({ hotels }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookStay = (hotel) => {
    setSelectedHotel(hotel);
  };

  if (!hotels || hotels.length === 0) {
    return <div>No hotels found</div>;
  }

  return (
    <div className="resultContainer">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="resultCard">
                   <CardMedia component="img" height="140" image={hotel.imgLink} alt={hotel.hotelName} />
                   <CardContent>
                   <Link to={`/hotels/${hotel.id}`} style={{ textDecoration: 'none' }}>
        
                       <Typography variant="h5" component="div" fontWeight="bold">
                       {hotel.hotelName}
                      </Typography>
                    </Link>
            <Typography variant="subtitle1" color="text.secondary">
              <strong>Location:</strong> {hotel.location}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <strong>Pool Availability:</strong>{" "}
              {hotel.pool ? "Available" : "Not Available"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <strong>Experience:</strong> {hotel.experienceLevel}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <strong>Price per Night:</strong> ${hotel.pricePerNight}
            </Typography>
            <button onClick={() => handleBookStay(hotel)}>Book My Stay</button>
          </CardContent>
        </Card>
      ))}
      {selectedHotel && (
        <Box className="bookingFormContainer">
          <BookingForm hotel={selectedHotel} />
        </Box>
      )}
    </div>
  );
};

export default ResultList;
