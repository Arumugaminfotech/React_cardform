import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContainerSlot from "./card";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Grid} from '@mui/material'
let ind = 0;

function ReceiptContainer() {
  const [containers, setContainers] = useState([]);
  const [name,setName] = useState('');
  const [des,setDes] = useState('');
  const [pro,setPro] = useState('')
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangedes = (event) => {
    setDes(event.target.value);
  };
  const rad = (event) => {
  
    setPro(event.target.value);
   
  }

  const handleAddContainer = () => {
   
    setContainers((current) => [...current, {name,des,pro}]);
    setName('');
    setDes('');
    setPro('');
    
    console.log(name);
    console.log(des);
    console.log(pro)
     
  };
  
 
  const show1 = (index) =>{
    setShow(prev => !prev);
    ind = index;
    console.log(ind);
   
  }
  const handleRemove = (index) => {
    const current = [...containers];
    current.splice(index, 1);
    setContainers(current);
  };
  const handleUpdate = (ind) => {
    console.log(ind);
    setShow(prev => !prev);
    const current = [...containers];
    current.splice(ind, 1,{name,des});
    setContainers(current); 
   
  };
  const update = () => {
    console.log(ind);
    handleUpdate(ind);
   
    
  }

  return (
    <div className="container">
      {/* Heading */}
      <div className="heading">
        <center><h1>Welcome to tringapps</h1></center>
        <hr />
      </div>
      <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
      <br></br>
              <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          value = {name}
          maxRows={4}
          onChange={handleChange}
        /><br></br>
          <TextField
          id="outlined-multiline-flexible"
          label="Profession"
          value = {des}
          multiline
          maxRows={4}
         onChange={handleChangedes}
        />
        <br></br>
        <FormControl>
          <br></br>
      <FormLabel id="demo-row-radio-buttons-group-label">Programing Language</FormLabel>
      <br></br>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onClick={rad}
        
      >
        <FormControlLabel value="Python" control={<Radio />} label="Python" />
        <FormControlLabel value="Java" control={<Radio />} label="Java" />
        <FormControlLabel value="JavaScript" control={<Radio />} label="JavaScript" />
      
      </RadioGroup>
    </FormControl>
        </Box>
        <div id="btn">
        <Stack direction="row" spacing={2} marginLeft="650px">
        <Button variant="contained" color="success" onClick={handleAddContainer}>
        Submit
      </Button>
      {show ? <Button variant="contained" color="success" onClick={update}>update</Button> : null}
      </Stack>
      </div>
      <hr></hr>

      <div className="receiptContainer__container">
        {containers.map((container, index) => {
            const handleUpdateClick = () => {
              show1(index);
            };
          const handleRemoveClick = () => {
            handleRemove(index);    
          };
        
          return (
              <div>
               
                <Grid><ContainerSlot container = {container} remove = {handleRemoveClick}  h={handleUpdateClick}/></Grid>
              </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default ReceiptContainer;