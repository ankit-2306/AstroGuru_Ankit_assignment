import React from 'react'
import Box from '@mui/system/Box';
import { ButtonGroup, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Stepfour() {
  const navigate=useNavigate();
  function handleRestart(){
    localStorage.removeItem('formDataOne');
    localStorage.removeItem('stepOneComplete');
    localStorage.removeItem('formDataTwo');
    localStorage.removeItem('stepTwoComplete');
    localStorage.removeItem('stepThreeComplete');
    navigate('/');
  }
  function handleBack(){
    navigate('/stepthree');

  }
  return (
  <>
   <Box
      sx={{
        position:'absolute',
        zIndex:2,
        display: ' flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        bgcolor: 'background.default',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginLeft:'35%',
        justifyContent:'space-around'
      }}
    >
      <Typography variant="h4" align="center">
          Form Submitted Successfully
        </Typography>
        <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" onClick={handleBack} >
          Back
        </Button>
        <Button variant="contained" href="#contained-buttons" onClick={handleRestart} > 
          Clear Form
        </Button>
      </ButtonGroup>
    </Box>
    <img src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" ></img>
  </>
  )
}
