import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContainerSlot from "./card";
let ind = 0;

function ReceiptContainer() {
  const [containers, setContainers] = useState([]);
  const [name,setName] = useState('');
  const [des,setDes] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangedes = (event) => {
    setDes(event.target.value);
  };

  const handleAddContainer = () => {
    // adding an empty object; you will likely need to
    // initialize this object with whatever values are stored
    // in the container form
   
    setContainers((current) => [...current, {name,des}]);
    setName('');
    setDes('');
    
    console.log(name);
    console.log(des);
     
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
    <div className="receiptContainer container">
      {/* Heading */}
      <div className="receiptContainer__heading mt-3">
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
              <TextField
          id="outlined-multiline-flexible"
          label="Task"
          multiline
          value = {name}
          maxRows={4}
          onChange={handleChange}
        /><br></br>
          <TextField
          id="outlined-multiline-flexible"
          label="Description"
          value = {des}
          multiline
          maxRows={4}
         onChange={handleChangedes}
        />
        </Box>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={handleAddContainer}>
        Success
      </Button>
      {show ? <Button variant="contained" color="success" onClick={update}>update</Button> : null}
      </Stack>
      <div className="receiptContainer__container">
        {/* You will likely need to pass whatever values are in 
        the container to your ContainerSlot component */}
        {containers.map((container, index) => {
            const handleUpdateClick = () => {
              show1(index);
            };
          const handleRemoveClick = () => {
            handleRemove(index);    
          };
        
          return (
              <div>
                <ContainerSlot {...container} remove = {handleRemoveClick}  h={handleUpdateClick}/>
              </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default ReceiptContainer;