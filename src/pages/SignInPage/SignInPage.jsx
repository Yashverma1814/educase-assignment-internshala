import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SignInPage.css"
import { Link } from 'react-router-dom';

export const SignInPage = () => {

    const inputField = {
        margin:"0.5rem",
        width:"90%"
    }

    const loginBtn = {
        backgroundColor:"#6c08db",
        padding:'0.7rem',
        width:"100%",
        fontSize:"10px",
        fontWeight:"800",
        marginTop:"1rem"
    }
    const [btnState,setBtnState] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("inactive")

    useEffect(()=>{
        if(email!==""&&pass!==""){
            setBtnState("active")
        }
    },[email,pass])

  return (
    <div className='page-main-head'>    
        <div className='page-main-signin'>
            <div>
                <h2>Signin to your <br /> PopX account</h2>
                <p>Lorem ipsum, dolor sit amet,<br /> consectetur adipisicing elit. </p>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={inputField} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={inputField} type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                {btnState==="active"?
                    <Link to={"/account"}>
                        <Button variant="contained" sx={loginBtn} >Login</Button>
                    </Link>:
                    <Button variant="contained" sx={loginBtn} disabled>Login</Button>
                }
            </div>
        </div>
    </div>
  )
}
