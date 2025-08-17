import React from 'react';
import Box from '@mui/material/Box';

const CozyElvesScene = ({ height = 90 }) => (
  <Box sx={{ width: '100%', height, position: 'relative', overflow: 'hidden' }}>
    <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2ECD4"/>
          <stop offset="100%" stopColor="#C8D5B9"/>
        </linearGradient>
      </defs>
      <path d="M0,80 C120,40 240,100 360,60 C460,30 540,70 600,50 L600,100 L0,100 Z" fill="url(#hill)"/>
      {/* Trees */}
      <g fill="#6B8F71">
        <rect x="70" y="48" width="6" height="18" fill="#4F7059"/>
        <path d="M73 30 l-12 16 h24 z"/>
        <rect x="180" y="50" width="6" height="16" fill="#4F7059"/>
        <path d="M183 34 l-10 14 h20 z"/>
      </g>
      {/* Elves */}
      <g>
        <circle cx="120" cy="70" r="6" fill="#A9C5A0"/>
        <rect x="116" y="70" width="8" height="8" fill="#6B8F71" rx="2"/>
        <circle cx="300" cy="68" r="6" fill="#A9C5A0"/>
        <rect x="296" y="68" width="8" height="8" fill="#6B8F71" rx="2"/>
      </g>
      {/* Tools */}
      <g stroke="#4F7059" strokeWidth="2">
        <line x1="138" y1="74" x2="150" y2="72"/>
        <line x1="315" y1="72" x2="327" y2="70"/>
      </g>
    </svg>
  </Box>
);

export default CozyElvesScene;

