import React from 'react';
import Box from '@mui/material/Box';

// Magma-like glowing line divider for rocket theme
const MagmaDivider = ({ colors = ['#FF6F60', '#E53935', '#2979FF'], height = 16, parallax = true }) => {
  const wrapperRef = React.useRef(null);
  React.useEffect(() => {
    if (!parallax) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const line = wrapperRef.current?.querySelector('[data-core]');
        if (line) line.style.transform = `translateY(-50%) translateX(${(y * 0.08) % 20}px)`;
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);
  return (
    <Box ref={wrapperRef} sx={{ position: 'relative', width: '100%', height, my: 1 }}>
      {/* Core bright line */}
      <Box sx={{
        position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)',
        height: 2,
        background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
        boxShadow: `0 0 12px ${colors[0]}, 0 0 22px ${colors[1]}, 0 0 8px ${colors[2]}66`,
        filter: 'saturate(1.2)',
        transition: 'background 600ms cubic-bezier(0.16,1,0.3,1), box-shadow 600ms cubic-bezier(0.16,1,0.3,1), transform 120ms linear',
      }} data-core />
      {/* Subtle bleed above */}
      <Box sx={{
        position: 'absolute', left: 0, right: 0, top: 0,
        height: '60%',
        background: `linear-gradient(180deg, ${colors[0]}22, transparent)`,
        pointerEvents: 'none',
      }} />
      {/* Subtle bleed below */}
      <Box sx={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: '60%',
        background: `linear-gradient(0deg, ${colors[2]}22, transparent)`,
        pointerEvents: 'none',
      }} />
    </Box>
  );
};

export default MagmaDivider;
