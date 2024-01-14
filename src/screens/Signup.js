import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
export default function Signup() {

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName] = useState('')
    const[phoneNUmber, setPhoneNumber]=useState('')
   const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('',{firstName, lastName, email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
   }
  return (
    <div>
        <Navbar/>
        <div className='signup-cover'>
        <form action='POST' onSubmit={handleSubmit}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <div>
      <TextField
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    id="outlined-first_name-input"
                    label="First Name"
                    defaultValue=""
                    error={false}

                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '12.5ch !important' },
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
                    onChange={(e)=>{setLastName(e.target.value)}}
                    id="outlined-last_name-input"
                    label="Last Name"
                    defaultValue=""
                    error={false}
                    
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
        onChange={(e)=>{setPhoneNumber(e.target.value)}}
          id="outlined-number"
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
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
          }}
        />
       
        
       
                  <TextField
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                    onChange={(e)=>{setPassword(e.target.value)}}
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
      <div className='signup_button'>
        
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '10%', '@media (max-width: 600px)': { width: '1em' }}}>
        SIGN UP
        </Button>
      </div>
      </form>
      </div>
    </div>
  )
}
