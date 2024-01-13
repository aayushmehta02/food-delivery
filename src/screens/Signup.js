import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import Navbar from '../components/Navbar';
export default function Signup() {
  return (
    <div>
        <Navbar/>
        <div className='signup-cover'>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <div>
      <TextField
                    
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
      
      </div>
    </div>
  )
}
