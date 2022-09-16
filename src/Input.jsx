import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="filled-basic" label="Filled" variant="filled" style={{
         background:'white',
         height:'70%',
         borderRadius:"10px",
         border:'none',
         outline:'none',
         color:'blueviolet',
      }} />
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
export default BasicTextFields;