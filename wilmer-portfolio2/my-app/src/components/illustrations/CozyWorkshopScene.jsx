import React from 'react';
import Box from '@mui/material/Box';

const CozyWorkshopScene = ({ height = 80 }) => (
  <Box sx={{ width: '100%', height, position: 'relative', overflow: 'hidden' }}>
    <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="70" width="600" height="30" fill="#E2ECD4"/>
      <rect x="260" y="40" width="80" height="30" fill="#C8D5B9" rx="3"/>
      <rect x="180" y="48" width="40" height="22" fill="#A9C5A0" rx="2"/>
      <rect x="360" y="48" width="40" height="22" fill="#A9C5A0" rx="2"/>
      {/* little characters */}
      <circle cx="210" cy="70" r="6" fill="#6B8F71"/>
      <rect x="206" y="70" width="8" height="8" fill="#4F7059" rx="2"/>
      <circle cx="390" cy="70" r="6" fill="#6B8F71"/>
      <rect x="386" y="70" width="8" height="8" fill="#4F7059" rx="2"/>
      {/* tools */}
      <path d="M280 36 l6 -6 l6 6" stroke="#6B8F71" strokeWidth="2" fill="none"/>
      <line x1="236" y1="52" x2="252" y2="52" stroke="#6B8F71" strokeWidth="2"/>
    </svg>
  </Box>
);

export default CozyWorkshopScene;

