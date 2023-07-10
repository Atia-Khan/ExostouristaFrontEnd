
import React, { useEffect, useState } from 'react';
import ResultList from './ResultsList';
import './search.css';

import { Box, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";

const Search = () => {
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [pool, setPool] = useState("");
  const [fetchedHotels, setFetchedHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handlePoolChange = (event) => {
    setPool(event.target.value);
  };


  useEffect(() => {
    fetch('http://localhost:8082/hotels/getAllHotels')
      .then(response => response.json())
      .then(data => setFetchedHotels(data))
      
      .catch(error => console.log(error));
  }, []);
  console.log("Fetchedd Hotels data is:",fetchedHotels);




  useEffect(() => {
    const filtered = fetchedHotels.filter(hotel => {
      const matchCity = !city || hotel.location === city;
      const matchExperience = !experience || hotel.experienceLevel === experience;
      const matchPool = pool === null || hotel.isPool === pool;
      return matchCity && matchExperience && matchPool;
    });
    setFilteredHotels(filtered);
  }, [city, experience, pool, fetchedHotels]);

  const handleSearch = () => {
    setShowResults(true);
  }

  


  return (
    <Box className="mainContainer">
      <Box className="searchBox" sx={{ width: "20%", height: "10%" }}>
        <FormControl fullWidth>
          <InputLabel id="city-label">Select Your City</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={city}
            label="City"
            onChange={handleCityChange}
          >
            <MenuItem value="Karachi">Karachi</MenuItem>
            <MenuItem value="Islamabad">Islamabad</MenuItem>
            <MenuItem value="Lahore">Lahore</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="experience-label">Select Experience Level</InputLabel>
          <Select
            labelId="experience-label"
            id="experience-select"
            value={experience}
            label="Experience"
            onChange={handleExperienceChange}
          >
            <MenuItem value="Budget">Budget</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Luxury">Luxury</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="pool-label">Pool Availability</InputLabel>
          <Select
            labelId="pool-label"
            id="pool-select"
            value={pool}
            label="Pool"
            onChange={handlePoolChange}
          >
            <MenuItem value={true}>Available</MenuItem>
            <MenuItem value={false}>Not Available</MenuItem>
          </Select>
        </FormControl>

 <Button variant="contained" color="success" onClick={handleSearch}> 
  Search
</Button>        
      </Box>
      {/* {filteredHotels.map(hotel => (
          <div key={hotel.id}>
            <h3>{hotel.hotelName}</h3>
            <p>{hotel.description}</p>
           
          </div>
        ))} */}
        {showResults && <ResultList hotels={filteredHotels} />}
      <Box>

      </Box>
      <ResultList hotels={filteredHotels} />
    </Box>
  );
};

export default Search;
