import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const CursorGlow = () => {
  const theme = useTheme();
  const ref = React.useRef(null);
  const dotRef = React.useRef(null);
  const glowRef = React.useRef(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      node.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onDown = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(0.75)';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };
    const onUp = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
      if (glowRef.current) glowRef.current.style.opacity = theme.palette.mode === 'dark' ? '0.28' : '0.22';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [theme.palette.mode]);

  const cozy = theme.palette.mode !== 'dark';
  const glow = cozy ? '0 0 16px #A9C5A0' : '0 0 24px #FF6F60, 0 0 36px #2979FF';

  return (
    <Box
      ref={ref}
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: (t) => t.zIndex.modal + 2,
      }}
    >
      <Box
        ref={glowRef}
        sx={{
          position: 'absolute',
          transform: 'translate(-22px, -22px)',
          width: 44,
          height: 44,
          borderRadius: '50%',
          boxShadow: glow,
          opacity: cozy ? 0.18 : 0.3,
          transition: 'opacity 120ms ease',
        }}
      />
      <Box ref={dotRef} sx={{ position: 'absolute', transform: 'translate(-10px, -10px)', transition: 'transform 90ms ease' }}>
        {/* Leaf (cozy) or Rocket flame (rocket) shaped SVG */}
        {cozy ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 6 6 9 6 12c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3-2-6-6-10Z" fill="#6B8F71" stroke="#E2ECD4" strokeWidth="1"/>
            <path d="M10 14c1.5-.2 3-.2 4 0" stroke="#A9C5A0" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2c3 2 5 5 5 8 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-3 2-6 5-8Z" fill="#E53935" stroke="#FF6F60" strokeWidth="1"/>
            <path d="M12 15c-1 .6-1.8 1.5-2.2 2.6-.2.5.3 1 .8.8 1.1-.4 2-1.2 2.6-2.2.4-.7-.4-1.5-1.2-1.2Z" fill="#2979FF"/>
          </svg>
        )}
      </Box>
    </Box>
  );
};

export default CursorGlow;
