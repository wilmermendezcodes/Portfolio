import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const SideOrnaments = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === 'dark';
  return (
    <>
      <Box aria-hidden sx={{ position: 'absolute', left: -40, top: 40, width: 180, height: 260, opacity: dark ? 0.35 : 0.25, filter: dark ? 'saturate(1.3)' : 'none', pointerEvents: 'none' }}>
        {dark ? (
          <svg width="100%" height="100%" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="60" r="50" stroke="#E53935" strokeWidth="2" fill="none"/>
            <circle cx="70" cy="140" r="30" stroke="#2979FF" strokeWidth="2" fill="none"/>
            <line x1="0" y1="220" x2="200" y2="240" stroke="#FF6F60" strokeWidth="1.5"/>
          </svg>
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 240 C10 180 40 120 80 60" stroke="#A9C5A0" strokeWidth="4" fill="none"/>
            <circle cx="80" cy="60" r="10" fill="#6B8F71"/>
            <circle cx="55" cy="190" r="6" fill="#C8D5B9"/>
          </svg>
        )}
      </Box>
      <Box aria-hidden sx={{ position: 'absolute', right: -40, bottom: 40, width: 180, height: 260, opacity: dark ? 0.35 : 0.25, pointerEvents: 'none' }}>
        {dark ? (
          <svg width="100%" height="100%" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="220" r="40" stroke="#2979FF" strokeWidth="2" fill="none"/>
            <line x1="20" y1="120" x2="180" y2="100" stroke="#E53935" strokeWidth="1.5"/>
          </svg>
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M160 40 C140 120 120 180 80 240" stroke="#A9C5A0" strokeWidth="4" fill="none"/>
            <circle cx="80" cy="240" r="10" fill="#6B8F71"/>
          </svg>
        )}
      </Box>
    </>
  );
};

export default SideOrnaments;

