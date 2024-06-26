import * as React from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { ButtonGroup, Button, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homes() {
   const [formDataOne,setFormDataOne]=useState({});
   const [formData,setFormData]=useState({});
   const navigate=useNavigate();

    useEffect(()=>{
      if(localStorage.getItem("stepOneComplete")){
        let storedData=localStorage.getItem("formDataOne");
        let parsedData = JSON.parse(storedData);
        setFormDataOne(parsedData);
      }
      if(localStorage.getItem("stepTwoComplete")){
        let storedDataTwo=localStorage.getItem("formDataTwo");
        let parsedDataTwo = JSON.parse(storedDataTwo);
        setFormData(parsedDataTwo);
      }
    },[])

   

    function handleBack(){
      navigate('/steptwo');
    }

    function handleSubmit(e){
      e.preventDefault();
      localStorage.setItem('stepThreeComplete',true);
      navigate('/stepfour');
    }

   


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        justifyContent:'space-around'
      }}
    >

      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginTop:{xs:2,md:2},
        padding:{xs:2,md:4},
        gap:2,
        // bgcolor: '#cfe8fc', 
        height: '100%',
        
      }}
    >
      <Typography variant="h4" align="center">
          Personal Info
        </Typography>
      
      <TextField id="name"  placeholder='name' variant="filled" required value={formDataOne.name} disabled/>
      <TextField id="email" placeholder='email'  variant="filled" type='email' required value={formDataOne.email} disabled />
      <TextField id="number" placeholder="number"  variant="filled" required value={formDataOne.number} disabled/>

      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" disabled sx={{height:40}}>
          Back
        </Button>
        <Button variant="contained" href="#contained-buttons" disabled >
          Next
        </Button>
      </ButtonGroup>
    </Box>

      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginTop:{xs:2,md:2},
        padding:{xs:2,md:4},
        gap:2,
        // bgcolor: '#cfe8fc', 
        height:'100%',
      }}
    >
      <Typography variant="h4" align="center">
          Form Preview
      </Typography>
        
      <TextField id="address" placeholder="Address" required variant="filled" sx={{marginTop:2}}  value={formData.address} disabled />
      <TextField id="city" placeholder="City" required variant="standard" value={formData.city} disabled />
      <TextField id="state" placeholder="State" required variant="standard"  value={formData.state} disabled />
      <TextField id="zip" placeholder="Zip" required  variant="standard"   value={formData.zip} disabled />
      
      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" disabled sx={{height:40}}>
          Back
        </Button>
        <Button variant="contained" href="#contained-buttons" disabled >
          Next
        </Button>
      </ButtonGroup>
      
      </Box>

      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'initial',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginTop:{xs:2,md:2},
        padding:{xs:2,md:4},
        bgcolor: '#cfe8fc',
        height:'100%',
        gap:2
      }}
    >
      <Typography variant="h4" align="center">
          Form Preview
        </Typography>
        <div>Name:{formDataOne.name}</div>
        <div>email:{formDataOne.email}</div>
        <div>number:{formDataOne.number}</div>
        <div>Address:{formData.address}</div>
        <div>City:{formData.city}</div>
        <div>State:{formData.state}</div>
        <div>Zip:{formData.zip}</div>
      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" onClick={handleBack} >
          Back
        </Button>
        <Button variant="contained" href="#contained-buttons" onClick={handleSubmit} > 
          Submit
        </Button>
      </ButtonGroup>
      </Box>
    </Box>
  );
}
