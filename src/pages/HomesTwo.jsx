import * as React from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { ButtonGroup, Button, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homes() {
   const [formDataOne,setFormDataOne]=useState({});
   const [formData,setFormData]=useState({address:null,city:null,state:null,zip:null});
   const [cityCheck,setCityCheck]=useState(true); 
   const [stateCheck,setStateCheck]=useState(true); 
   const [zipCheck,setZipCheck]=useState(true);
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

    function handleChange(e){
      if(e.target.id==="address"){
        setFormData({...formData,address:e.target.value});
      }
      
      if(e.target.id==="city"){
        setFormData({...formData,city:e.target.value});
      }
      if(e.target.id==="state"){
        setFormData({...formData,state:e.target.value});
      }
      if(e.target.id==="zip"){
        setFormData({...formData,zip:e.target.value});
      }
    }

    function handleBack(){
      navigate('/');
    }

    function handleSubmit(e){
      e.preventDefault();
      const {city,state,zip}=formData;
      const isCityValid=/^[a-zA-Z ]+$/.test(city);
      const isStateValid=/^[a-zA-Z ]+$/.test(state);
      const isZipValid=/^[0-9]{6}$/.test(zip);
      setCityCheck(isCityValid);
      setStateCheck(isStateValid);
      setZipCheck(isZipValid);

      if(isCityValid && isStateValid && isZipValid){
        localStorage.setItem('formDataTwo',JSON.stringify(formData));
        localStorage.setItem('stepTwoComplete',true);
        navigate('/stepthree')
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

    <form onSubmit={handleSubmit}>
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
        bgcolor: '#cfe8fc', 
        height:'100%',
      }}
    >
      <Typography variant="h4" align="center">
          Address Info
        </Typography>
        
      <TextField id="address" placeholder="Address" required variant="filled" sx={{marginTop:2}}  value={formData.address} onChange={handleChange} />
      
      <TextField id="city" placeholder="City" required variant="standard" value={formData.city} onChange={handleChange} />
      {(!cityCheck) && <div className='text-red-500 text-sm'>* Enter correct city</div>}
      <TextField id="state" placeholder="State" required variant="standard"  value={formData.state} onChange={handleChange} />
      {(!stateCheck) && <div className='text-red-500 text-sm'>* Enter correct state</div>}
      <TextField id="zip" placeholder="Zip" required  variant="standard" type='number'  value={formData.zip} onChange={handleChange} />
      {(!zipCheck) && <div className='text-red-500 text-sm'>* Enter correct zip code</div>}
      <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{gap:2,marginTop:2}} >
        <Button variant="contained" onClick={handleBack} >
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
        padding:{xs:2,md:4},
      }}
    >
      <Typography variant="h4" align="center">
          Form Preview
        </Typography>
      <TextField id="acd" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filler" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
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
