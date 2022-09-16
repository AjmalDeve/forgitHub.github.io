import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BascButtons(porp) {
  console.log(porp.bg_color)
  return (

    <Stack spacing={4} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button 
        
      style={ 
        {background:`blueviolet`,color:`white`, fontWeight:`800`,width:`100%`,marginLeft:`0px`,padding:`10px` }
        } 
       className='btn'
      variant="contained">{porp.name}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
     </Stack>
  );
}
export default BascButtons;