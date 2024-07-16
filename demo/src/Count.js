import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CounterBox = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: '8px',
        width: '200px',
        margin: '0 auto',
        backgroundColor: 'hsl(177, 66%, 90%)',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', color: 'hsl(177, 66%, 20%)' }}>
        Count: {count}
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button
          variant="contained"
          onClick={handleIncrease}
          sx={{ backgroundColor: 'hsl(177, 66%, 55%)', color: 'white' }}
        >
          Increase
        </Button>
        <Button
          variant="contained"
          onClick={handleDecrease}
          sx={{ backgroundColor: 'hsl(357, 66%, 55%)', color: 'white' }}
        >
          Decrease
        </Button>
      </Box>
    </Box>
  );
};

export default CounterBox;
