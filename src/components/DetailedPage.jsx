import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import hotel1 from "../images/hotel1.jpg";
import "./Detailed.css";

const DetailedPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8082/hotels/get/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <img src={hotel1} alt={hotel.hotelName} className="image" />
      <Typography variant="h5" className="title bold">
        {hotel.hotelName}
      </Typography>
      <Typography variant="subtitle1" className="subtitle bold">
        Location: {hotel.location}
      </Typography>
      <Typography variant="subtitle1" className="subtitle bold">
        Short Description: {hotel.description}
      </Typography>
      <Typography variant="body1" className="description bold">
        Details: {hotel.longDesc}
      </Typography>
      <Typography variant="subtitle1" className="subtitle bold">
        Pool Availability: {hotel.pool ? "Available" : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" className="subtitle bold">
        Experience: {hotel.experienceLevel}
      </Typography>
      <Typography variant="subtitle1" className="subtitle bold">
        Price per Night: ${hotel.pricePerNight}
      </Typography>
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

export default DetailedPage;
