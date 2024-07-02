import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        sx={{
          '& .MuiInputLabel-root': { color: 'white' }, // label color
          '& .MuiInputLabel-root.Mui-focused': { color: 'white' }, // focused label color
          '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // default underline color
          '& .MuiInput-underline:hover:before': { borderBottomColor: 'white' }, // underline color on hover
          '& .MuiInput-underline:after': { borderBottomColor: 'white' }, // focused underline color
          '& .MuiInputBase-input': { color: 'white' }, // input text color

        }}
      />
    </Box>
  );
}
