import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Login() {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const handleError = (error) => {
    console.error(error);
  };
  async function submit(e){
    e.preventDefault();


    try{
      await axios.post("http://localhost:3000/login",{
        email,password
      });
    }
    catch(error){
      handleError(error);
    };
  };
  return (
    <div>
    <Navbar/>
    <h1>LOGIN</h1>
    <div className='login-form'>
      
      <form style={{width: '50vw'}} action='POST'>
      <div className='login-form-wrapper'>
        <img src='https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg' className='image_login'/>
        <Box component="form" sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}noValidate="false"
      autoComplete="on">
                <div className='login-fields'>
                  <TextField
                    onChange={(e)=>(setEmail(e.target.value)) }
                    id="outlined-login-input"
                    label="Email"
                    defaultValue=""
                    error={false}
                    fullWidth
                    sx={{
                     
                      '& .MuiInputBase-input': {
                        color: 'blue', // Input text color
                      },
                      '& .MuiInputLabel-root': {
                        color: 'green', // Label text color
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset':{
                        borderColor: 'blue', // Border color
                      }},
                      '& .MuiOutlinedInput-input': {
                        color: 'blue', // Placeholder text color
                      },
                      '& .MuiInputLabel-outlined': {
                        color: 'blue', // Label text color for outlined variant
                      },
                    }}/>
              
                  <TextField
                    onChange={(e)=>(setPassword(e.target.value))}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{
                      '& .MuiInputBase-input': {
                        color: 'blue', // Input text color
                      },
                      '& .MuiInputLabel-root': {
                        color: 'green', // Label text color
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset':{
                        borderColor: 'blue', // Border color
                      }},
                      '& .MuiOutlinedInput-input': {
                        color: 'blue', // Placeholder text color
                      },
                      '& .MuiInputLabel-outlined': {
                        color: 'blue', // Label text color for outlined variant
                      },
                    }}/>
                </div>
         </Box>
         <div className='buttons'>
          <div className='buttons_wrapper'>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '10%', '@media (max-width: 600px)': { width: '1em' }}}
          onClick={submit}>
        Login
        </Button>
        <Link to='/signup'>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        New user? Sign up!
        </Button>
        </Link>
          </div>
         
         </div>
         

    </div>
    </form>
    </div>
    </div>
  )
}
