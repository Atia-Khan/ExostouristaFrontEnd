import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ResultList = ({ hotels }) => {
  return (
    <div>
      {hotels.map(hotel => (
        <Card key={hotel.id} sx={{ maxWidth: 345, margin: '16px' }}>
          <CardMedia
            component="img"
            height="140"
            image={hotel.imgLink}
            alt={hotel.hotelName}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {hotel.hotelName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Location: {hotel.location}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Pool Availability: {hotel.isPool ? 'Available' : 'Not Available'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Experience: {hotel.experienceLevel}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Price per Night: ${hotel.pricePerNight}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResultList;

