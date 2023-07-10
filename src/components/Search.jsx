
// import React, { useEffect, useState } from 'react';
// import ResultList from './ResultsList';
// import Navbar from './Navbar';
// import './search.css';

// import { Box, FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";

// const Search = () => {
//   const [city, setCity] = useState("");
//   const [experience, setExperience] = useState("");
//   const [pool, setPool] = useState("");
//   const [fetchedHotels, setFetchedHotels] = useState([]);
//   const [filteredHotels, setFilteredHotels] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleExperienceChange = (event) => {
//     setExperience(event.target.value);
//   };

//   const handlePoolChange = (event) => {
//     setPool(event.target.value);
//   };


//   useEffect(() => {
//     fetch('http://localhost:8082/hotels/getAllHotels')
//       .then(response => response.json())
//       .then(data => setFetchedHotels(data))
      
//       .catch(error => console.log(error));
//   }, []);
//   console.log("Fetchedd Hotels data is:",fetchedHotels);




  

//   useEffect(() => {
//     const filterHotels = () => {
//       if (city === "" && experience === "" && pool === "") {
//         // No filters selected, show all fetched hotels
//         setFilteredHotels(fetchedHotels);
//       } else {
//         const filtered = fetchedHotels.filter(hotel => {
//           return (
//             (city === "" || hotel.location === city) &&
//             (experience === "" || hotel.experienceLevel === experience) &&
//             (pool === "" || hotel.isPool === (pool === "true" ? true : false))
//             );
//         });
//         setFilteredHotels(filtered);
//         console.log("filtered data", filtered);
//       }
//     };

//     filterHotels();
//   }, [city, experience, pool, fetchedHotels]);


  

//   const handleSearch = () => {
//     setShowResults(true);
//   };

 

  


//   return (
//     <>
//     <Navbar />
//     <Box className="mainContainer">
//       <Box className="searchBox" sx={{ width: "20%", height: "10%" }}>
//         <FormControl fullWidth>
//           <InputLabel id="city-label">Select Your City</InputLabel>
//           <Select
//             labelId="city-label"
//             id="city-select"
//             value={city}
//             label="City"
//             onChange={handleCityChange}
//           >
//             <MenuItem value="Karachi">Karachi</MenuItem>
//             <MenuItem value="Islamabad">Islamabad</MenuItem>
//             <MenuItem value="Lahore">Lahore</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel id="experience-label">Select Experience Level</InputLabel>
//           <Select
//             labelId="experience-label"
//             id="experience-select"
//             value={experience}
//             label="Experience"
//             onChange={handleExperienceChange}
//           >
//             <MenuItem value="Budget">Budget</MenuItem>
//             <MenuItem value="Business">Business</MenuItem>
//             <MenuItem value="Luxury">Luxury</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel id="pool-label">Pool Required</InputLabel>
//           <Select
//             labelId="pool-label"
//             id="pool-select"
//             value={pool}
//             label="Pool"
//             onChange={handlePoolChange}
//           >
//             <MenuItem value={true}>Required</MenuItem>
//             <MenuItem value={false}>Not Required</MenuItem>
//           </Select>
//         </FormControl>

//  <Button variant="contained" color="success" onClick={handleSearch}> 
//   Search
// </Button>        
//       </Box>
      
//         {showResults && <ResultList hotels={filteredHotels} />}
//       <Box>

//       </Box>
  
//     </Box>
//     </>
//   );
// };

// export default Search;


import React, { useEffect, useState } from 'react';
import ResultList from './ResultsList';
import Navbar from './Navbar';
import hotel8 from '../images/hotel8.jpg';
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

  useEffect(() => {
    const filterHotels = () => {
      if (city === "" && experience === "" && pool === "") {
        // No filters selected, show all fetched hotels
        setFilteredHotels(fetchedHotels);
      } else {
        const filtered = fetchedHotels.filter(hotel => {
          return (
            (city === "" || hotel.location === city) &&
            (experience === "" || hotel.experienceLevel === experience) &&
            (pool === "" || hotel.isPool === (pool === "true" ? true : false))
          );
        });
        setFilteredHotels(filtered);
      }
    };

    filterHotels();
  }, [city, experience, pool, fetchedHotels]);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <>
      <Navbar />
      <Box className="mainContainer" style={{ backgroundImage: `url(${hotel8})` }}>
        <Box className="backgroundText">
          <h1>Welcome to the Exostourista</h1>
        </Box>
        <Box className="searchBox">
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
            <InputLabel id="pool-label">Pool Required</InputLabel>
            <Select
              labelId="pool-label"
              id="pool-select"
              value={pool}
              label="Pool"
              onChange={handlePoolChange}
            >
              <MenuItem value={true}>Required</MenuItem>
              <MenuItem value={false}>Not Required</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="success" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {showResults && <ResultList hotels={filteredHotels} />}
      </Box>
    </>
  );
};

export default Search;


