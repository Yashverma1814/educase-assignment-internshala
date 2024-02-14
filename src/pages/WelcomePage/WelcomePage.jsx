import React from 'react'
import Button from '@mui/material/Button';
import "./WelcomePage.css"
import { Link } from 'react-router-dom';

export const WelcomePage = () => {

  const welcomeBtn = {
    backgroundColor:"#6c08db",
    padding:'0.7rem',
    width:'100%',
    fontSize:"10px",
    fontWeight:"800"
  }
  const registeredBtn = {
    backgroundColor:"#d6b4fc",
    padding:'0.7rem',
    width:"100%",
    marginTop:"1rem", 
    fontSize:"10px",
    color:"black",
    fontWeight:"800"
  }


  return (
    <div className='page-main-head'>
      <div className='page-main'>
          <div>
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum, dolor sit amet,<br /> consectetur adipisicing elit. </p>
            <Link to={"/signup"}>
              <Button variant="contained" sx={welcomeBtn}>Create Account</Button>
            </Link>
            <Link to={"/signin"}>
              <Button variant="contained" sx={registeredBtn}>Already Registered? Login</Button>
            </Link>
          </div>
      </div>
    </div>
  )
}
