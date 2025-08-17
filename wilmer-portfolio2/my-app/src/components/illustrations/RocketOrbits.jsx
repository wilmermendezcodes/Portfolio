import React from 'react';
import Box from '@mui/material/Box';

const RocketOrbits = ({ height = 90, colors = ['#FF6F60','#E53935','#2979FF'] }) => (
  <Box sx={{ width: '100%', height, position: 'relative', overflow: 'hidden' }}>
    <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity=".5"/>
          <stop offset="80%" stopColor={colors[1]} stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="140" cy="50" r="36" stroke={colors[0]} strokeWidth="2" fill="none"/>
      <circle cx="140" cy="50" r="22" stroke={colors[2]} strokeWidth="1.5" fill="none"/>
      <circle cx="460" cy="50" r="28" stroke={colors[1]} strokeWidth="2" fill="none"/>
      <circle cx="460" cy="50" r="16" stroke={colors[2]} strokeWidth="1.5" fill="none"/>
      <rect x="0" y="0" width="600" height="100" fill="url(#rg)"/>
      <line x1="0" y1="80" x2="600" y2="80" stroke={colors[2]} strokeWidth="1" strokeOpacity=".6"/>
    </svg>
  </Box>
);

export default RocketOrbits;

