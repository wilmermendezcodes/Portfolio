import React from 'react';
import AppBar from './components/ResponsiveAppBar'
import Footer from './components/Footer'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import cozyTheme from './theme';
import rocketTheme from './rocketTheme';
import CursorGlow from './components/CursorGlow';
import ThemeIndicator from './components/ThemeIndicator';

const App = () => {
  const [mode, setMode] = React.useState('cozy');
  const [switching, setSwitching] = React.useState(false);
  const [indicator, setIndicator] = React.useState({ visible: false, mode: 'cozy' });
  const theme = React.useMemo(() => (mode === 'rocket' ? rocketTheme : cozyTheme), [mode]);
  const toggleTheme = () => {
    const next = mode === 'cozy' ? 'rocket' : 'cozy';
    setSwitching(true);
    setIndicator({ visible: true, mode: next });
    setTimeout(() => setSwitching(false), 650);
    setTimeout(() => setIndicator(s => ({ ...s, visible: false })), 1400);
    setMode(next);
  };
  React.useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {/* Site-wide subtle noise overlay (keep for both themes) */}
        <Box
          aria-hidden
          sx={{
            position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: (t) => t.zIndex.modal + 1,
            opacity: mode === 'rocket' ? 0.06 : 0.035,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.35'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          }}
        />
        <AppBar onToggleTheme={toggleTheme} themeMode={mode} />
        <CursorGlow />
        <ThemeIndicator mode={indicator.mode} visible={indicator.visible} />
        {/* Theme transition overlay */}
        {switching && (
          <Box aria-hidden sx={{ position: 'fixed', inset: 0, zIndex: (t) => t.zIndex.modal + 3, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))', mixBlendMode: 'overlay', animation: 'fadeBlurOut 650ms cubic-bezier(0.16,1,0.3,1) forwards' }} />
        )}
        <Footer />
      </div>
      <style>{`
        @keyframes fadeBlurOut {
          0% { opacity: 1; backdrop-filter: blur(6px); }
          60% { opacity: 0.35; backdrop-filter: blur(3px); }
          100% { opacity: 0; backdrop-filter: blur(0); }
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;
