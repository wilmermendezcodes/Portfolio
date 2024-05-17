import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function FrontPaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          maxWidth: 100,
          height: 500,
        },
      }}
      style={{          backgroundColor: '#E6D5A9'}}
    >

      <Paper />

    </Box>
  );
}
