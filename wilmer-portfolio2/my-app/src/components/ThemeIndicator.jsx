import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpaIcon from '@mui/icons-material/Spa';
import { animated, useSpring } from 'react-spring';

const AnimatedBox = animated(Box);

const ThemeIndicator = ({ mode = 'cozy', visible = false }) => {
  const theme = useTheme();
  const isRocket = mode === 'rocket';

  const styles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px) scale(1)' : 'translateY(-16px) scale(0.96)',
    config: { tension: 210, friction: 18 },
  });

  const bg = isRocket
    ? 'linear-gradient(90deg, #AB000D 0%, #E53935 50%, #2979FF 100%)'
    : 'linear-gradient(90deg, #6B8F71 0%, #A9C5A0 100%)';
  const glow = isRocket
    ? '0 10px 26px rgba(229,57,53,0.45), 0 6px 18px rgba(41,121,255,0.35)'
    : '0 8px 22px rgba(107,143,113,0.35)';

  return (
    <AnimatedBox
      style={styles}
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: (t) => t.zIndex.modal + 4,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 1,
        borderRadius: 999,
        background: bg,
        color: '#fff',
        boxShadow: glow,
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      {isRocket ? <RocketLaunchIcon fontSize="small" /> : <SpaIcon fontSize="small" />}
      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '.08em' }}>
        {isRocket ? 'Switching to ROCKET THEME' : 'Switching to COZY THEME'}
      </Typography>
    </AnimatedBox>
  );
};

export default ThemeIndicator;
