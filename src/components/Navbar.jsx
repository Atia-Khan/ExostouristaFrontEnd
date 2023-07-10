import React from 'react'
import { Box} from "@mui/material";
import logo from "../images/Boho Abstract Handwritten Brand Logo.png";
import './search.css';
const Navbar = () => {
  return (
   <>
   <Box className="nav"
    sx={{
        width: "100%",
        height: "300px",
        backgroundColor: "black",
    }}
    >
     <img style={{
        width: "700px",
        height: "500px",
        marginTop: "-4%"
        
     }} className= "nav-img" src={logo} alt="exostourista logo" />
   </Box>
   </>
  )
}

export default Navbar
