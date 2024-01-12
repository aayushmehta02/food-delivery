import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import React from 'react';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CustomSearch = () => {
  return (
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
  );
};

export default CustomSearch;