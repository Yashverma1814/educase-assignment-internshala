import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SignUpPage.css"
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
    const inputField = {
        margin:"3px",
        width:"90%"
    }
    const createBtn = {
        backgroundColor:"#6c08db",
        padding:'0.7rem',
        width:"100%",
        fontSize:"10px",
        fontWeight:"800",
        marginTop:"1rem"
    }

    const [agenyStatus, setAgencyStatus] = useState("")

  return (
    <div className='page-main-head'>
        <div className='page-main-signup'>
            <h2>Create Your <br /> PopX account</h2>
            <p>Lorem ipsum, dolor sit amet,<br /> consectetur adipisicing elit. </p>
            <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={inputField} />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={inputField}/>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={inputField} />
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={inputField} type="password"/>
            <TextField id="outlined-basic" label="Company Name" variant="outlined" sx={inputField} />
            <p>Are you an Agency</p>
            <input type="radio" name="test" value="Yes" onChange={()=>setAgencyStatus("Yes")}/> Yes
            <input type="radio" name="test" value="No" onChange={()=>setAgencyStatus("No")}/> No
            <div className='create-page-btn'>
                <Link to={"/account"}>
                    <Button variant="contained" sx={createBtn} >Create</Button>
                </Link>
            </div>
        </div>

    </div>
  )
}
