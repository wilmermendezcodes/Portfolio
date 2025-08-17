import React from 'react';
import Box from '@mui/material/Box';

// Decorative wave divider using inline SVG for a crafted look
const SectionDivider = ({ flip = false, color }) => {
  return (
    <Box sx={{ lineHeight: 0, transform: flip ? 'rotate(180deg)' : 'none' }}>
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 60 }}
      >
        <path
          fill={color || '#A9C5A0'}
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,106.7C672,85,768,43,864,42.7C960,43,1056,85,1152,96C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </Box>
  );
};

export default SectionDivider;

