import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        //   id="outlined-multiline-static"
          label="Massage"
          multiline
          rows={6}
        //   defaultValue="Text"
        />
      </div>

      {/* </div> */}
    </Box>
  );
}
