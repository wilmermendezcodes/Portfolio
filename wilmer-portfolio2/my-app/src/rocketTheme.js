import { createTheme } from '@mui/material/styles';

// Rocket-science theme: glossy reds, deep blacks, electric blues
const rocketTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E53935', // rocket red
      light: '#FF6F60',
      dark: '#AB000D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2979FF', // electric blue
      light: '#6AB7FF',
      dark: '#004ECb',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0B0C10',
      paper: '#101218',
    },
    text: {
      primary: '#E6E6E6',
      secondary: '#A0A6AD',
    },
    divider: 'rgba(255,255,255,0.14)'
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'
    ].join(','),
    button: { textTransform: 'none', fontWeight: 700 },
    h1: { letterSpacing: '0.04em', fontWeight: 800 },
    h2: { letterSpacing: '0.04em', fontWeight: 800 },
    h3: { letterSpacing: '0.035em', fontWeight: 800 },
    h4: { letterSpacing: '0.03em', fontWeight: 800 },
    body1: { letterSpacing: '0.01em' },
    body2: { letterSpacing: '0.01em' },
    subtitle1: { letterSpacing: '0.012em' },
    subtitle2: { letterSpacing: '0.012em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 600ms cubic-bezier(0.16,1,0.3,1), color 600ms cubic-bezier(0.16,1,0.3,1)',
        },
        '*': {
          transition: 'background-color 600ms cubic-bezier(0.16,1,0.3,1), color 600ms cubic-bezier(0.16,1,0.3,1), border-color 600ms cubic-bezier(0.16,1,0.3,1)',
        },
        ':root :focus-visible': {
          outline: '2px solid #FF6F60',
          outlineOffset: '2px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background:
            'linear-gradient(180deg, #AB000D 0%, #E53935 60%, #FF6F60 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 10px 28px rgba(229,57,53,0.35), 0 4px 16px rgba(41,121,255,0.25)',
          transition: 'background 600ms cubic-bezier(0.16,1,0.3,1), box-shadow 600ms cubic-bezier(0.16,1,0.3,1)'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:
            'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          boxShadow:
            '0 8px 26px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
          transition: 'background 600ms cubic-bezier(0.16,1,0.3,1), box-shadow 600ms cubic-bezier(0.16,1,0.3,1)'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 300ms cubic-bezier(0.16,1,0.3,1), transform 180ms cubic-bezier(0.16,1,0.3,1), background 300ms cubic-bezier(0.16,1,0.3,1)',
          '&:hover': {
            boxShadow: '0 12px 34px rgba(229,57,53,0.45), 0 8px 22px rgba(41,121,255,0.35)',
            transform: 'translateY(-1px)'
          },
          '&:focus-visible': {
            boxShadow: '0 0 0 3px rgba(229,57,53,0.65), 0 0 0 6px rgba(41,121,255,0.45)'
          },
        },
        containedPrimary: {
          backgroundImage:
            'linear-gradient(90deg, #AB000D 0%, #E53935 50%, #FF6F60 100%)',
          boxShadow: '0 10px 28px rgba(229,57,53,0.45)'
        },
        outlinedPrimary: {
          borderColor: 'rgba(229,57,53,0.6)',
          '&:hover': { borderColor: '#FF6F60' }
        },
        containedSecondary: {
          backgroundImage: 'linear-gradient(90deg, #004ECB 0%, #2979FF 60%, #6AB7FF 100%)',
          boxShadow: '0 10px 28px rgba(41,121,255,0.45)'
        },
        outlinedSecondary: {
          borderColor: 'rgba(41,121,255,0.65)',
          '&:hover': { borderColor: '#6AB7FF' }
        },
        textSecondary: {
          '&:hover': { color: '#6AB7FF' }
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 300ms cubic-bezier(0.16,1,0.3,1), transform 180ms cubic-bezier(0.16,1,0.3,1)',
          '&:hover': {
            boxShadow: '0 0 16px rgba(229,57,53,0.55), 0 0 12px rgba(41,121,255,0.35)'
          },
          '&:focus-visible': {
            boxShadow: '0 0 0 3px rgba(229,57,53,0.65), 0 0 0 6px rgba(41,121,255,0.45)'
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'text-shadow 160ms ease, color 160ms ease',
          '&:hover': { textShadow: '0 0 12px rgba(255,111,96,0.8), 0 0 10px rgba(41,121,255,0.5)', color: '#FF6F60' },
          '&:focus-visible': { outline: '2px solid #FF6F60', outlineOffset: '2px' },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255,111,96,0.12)',
            boxShadow: 'inset 0 0 0 1px rgba(255,111,96,0.35), inset 0 -2px 0 0 rgba(41,121,255,0.35)'
          },
          '&.Mui-focusVisible': {
            boxShadow: '0 0 0 3px rgba(229,57,53,0.65), 0 0 0 6px rgba(41,121,255,0.45)'
          },
        },
      },
    },
  },
});

export default rocketTheme;
