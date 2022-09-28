import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { Button} from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FullWidthGrid from './Card';




export default function SelectTextFields() {
  const [values, setValues] = React.useState("");
  const [Country, setCountry] = React.useState("Pakistan");
  const [Flage, setFlage] = useState("");

  const searchData= async ()=>{
 await fetch(`https://disease.sh/v3/covid-19/countries/${Country}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("data is ", data[0]);
    setValues(data);
    setFlage(data.countryInfo.flag);
  });
   console.log("country input", values);
  }
  
  return (
    <div>
    
    <Box
        component="form"
      sx={{
        mt:10,
        display: 'flex',
        justifyContent: 'center', 
      }}
     
      noValidate
      autoComplete="off"
    >
      <Box sx={{
         width: 500,
         maxWidth: '100%',
      }}>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">country name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
             value={Country}
             onChange={(e)=>{setCountry(e.target.value)}}
          />
          <Button sx={{mt:1}} variant="contained"  onClick={searchData}>Search</Button>
        </FormControl> 
      
      </Box>
    </Box>
    <FullWidthGrid values={values} Flage={Flage}/>
    </div>
  );
}
