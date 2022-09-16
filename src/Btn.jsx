import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons(porp) {
  console.log(porp.bg_color)
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button 
        
      style={ 
        {background:`white`,color:`blueviolet`, fontWeight:`800`,width:`100px` , marginLeft:'-77px' ,paddingTop:'10px',paddingBottom:'10px',paddingLeft:'10px' }
        } 
       className='btn'
      variant="contained">{porp.name}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
     </Stack>
  );
}
export default BasicButtons;