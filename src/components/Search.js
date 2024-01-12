import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';
export default function Search() {
  return (
    <div>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent:'center', justifyItems:'center', alignContent:'center', width: 500, borderBlockColor: 'blue'}}
    className='form'>
      
      <InputBase
        sx={{ ml: 5, flex: 10, borderColor: 'blue'}}
        placeholder="Decide your gourmet sensation!"
        inputProps={{ 'aria-label': 'Decide your gourmet sensation!' }}
      />
      <IconButton type="button" sx={{ p: '15px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      
    </Paper>
    </div>
  )
}
