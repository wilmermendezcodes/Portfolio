import React from 'react';
import Box from '@mui/material/Box';

// Pastel-green artistic line divider for cozy theme
const LinesDivider = ({ colors = ['#A9C5A0', '#6B8F71'], height = 14 }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height, my: 1 }}>
      <Box sx={{
        position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)',
        height: 2,
        background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]}, ${colors[0]})`,
        boxShadow: `0 0 10px ${colors[0]}55`,
      }} />
      <Box sx={{
        position: 'absolute', left: 0, right: 0, top: 0,
        height: '60%',
        background: `linear-gradient(180deg, ${colors[0]}22, transparent)`,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: '60%',
        background: `linear-gradient(0deg, ${colors[1]}22, transparent)`,
        pointerEvents: 'none',
      }} />
    </Box>
  );
};

export default LinesDivider;

