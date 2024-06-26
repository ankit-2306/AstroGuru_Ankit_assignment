import * as React from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { ButtonGroup, Button, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homes() {
   const [formData,setFormData]=useState({name:null,email:null,number:null});
    const [nameCheck,setNameCheck]=useState(true);
    const [numberCheck,setNumberCheck]=useState(true);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [number,setNumber]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
      if(localStorage.getItem("stepOneComplete")){
        let storedData=localStorage.getItem("formDataOne");
        let parsedData = JSON.parse(storedData);
        setFormData(parsedData);
      }
    },[])

    function handleChange(e){
      if(e.target.id==="name"){
        setFormData({...formData,name:e.target.value});
        setName(e.target.value);
      }
      
      if(e.target.id==="email"){
        setFormData({...formData,email:e.target.value});
        setEmail(e.target.value);
      }
      if(e.target.id==="number"){
        setNumber(e.target.value);
        setFormData({...formData,number:e.target.value});
      }
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const { name, email, number } = formData;
        const isNameValid = /^[a-zA-Z ]+$/.test(name);
        const isNumberValid = /^[6-9]{1}[0-9]{9}$/.test(number);
        setNameCheck(isNameValid);
        setNumberCheck(isNumberValid);
 
        if (isNameValid && isNumberValid) {
            localStorage.setItem('formDataOne', JSON.stringify(formData));
            localStorage.setItem('stepOneComplete', true);
            navigate('/steptwo');
        }
      
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
      
      <form onSubmit={handleSubmit}>
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        // bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginTop:{xs:2,md:2},
        padding:{xs:2,md:4},
        gap:2,
        bgcolor: '#cfe8fc', 
        height: '100%',
        
      }}
    >
      <Typography variant="h4" align="center">
          Personal Info
        </Typography>
      
      <TextField id="name"  placeholder='name' variant="filled" required value={formData.name} onChange={handleChange}/>
      {(!nameCheck) && <div className='text-red-500 text-sm'>*Enter name correctly</div>}
      <TextField id="email" placeholder='email'  variant="filled" type='email' required value={formData.email} onChange={handleChange}/>
      <TextField id="number" placeholder="number"  variant="filled" required value={formData.number} onChange={handleChange}/>
      {(!numberCheck) && <div className='text-red-400 text-sm'>*Enter a valid no.</div>}

      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" disabled sx={{height:40}}>
          Back
        </Button>
        
      <input className="px-4  bg-blue-600 text-white rounded border-white" type="submit" value="Next" />
      </ButtonGroup>
    </Box>
    </form>

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
      }}
    >
      <Typography variant="h4" align="center">
          Address Info
        </Typography>
        
      <TextField id="acd" label="Address Line 1" variant="filled" sx={{marginTop:2}} disabled/>
      <TextField id="filled-basic" label="Address Line 2" variant="filled" disabled/>
      <TextField id="standard-basic" label="City" variant="standard" disabled/>
      <TextField id="standard-basic" label="State" variant="standard" disabled/>
      <TextField id="standard-basic" label="Zip" variant="standard" disabled/>
      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2,marginTop:2}} disabled>
        <Button variant="contained" disabled >
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
        bgcolor: 'background.default',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'clip',
        marginTop:{xs:2,md:2},
        padding:{xs:2,md:4},
        gap:2
      }}
    >
      <Typography variant="h4" align="center">
          Form Preview
        </Typography>
        <div>Name:</div>
        <div>email:</div>
        <div>number:</div>
        <div>Address:</div>
        <div>City:</div>
        <div>State:</div>
        <div>Zip:</div>
        <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2}}>
        <Button variant="contained" disabled >
          Back
        </Button>
        <Button variant="contained" href="#contained-buttons" disabled> 
          Submit
        </Button>
      </ButtonGroup>
      </Box>
    </Box>
  );
}
