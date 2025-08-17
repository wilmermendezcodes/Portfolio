import { createTheme } from '@mui/material/styles';

// Cozy pastel-green theme inspired by cozy games
const theme = createTheme({
  palette: {
    primary: {
      main: '#6B8F71', // sage green
      light: '#A9C5A0', // pastel leaf
      dark: '#4F7059',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C8D5B9', // soft moss
      dark: '#A7B89B',
      light: '#E2ECD4',
      contrastText: '#2F3E34',
    },
    background: {
      default: '#F4F7F2', // misty meadow
      paper: '#EDF3E4', // parchment-like soft green
    },
    text: {
      primary: '#2F3E34', // deep forest
      secondary: '#5A6B5E',
    },
    divider: '#D9E5D0',
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    // Cozy, rounded feel; leave room for future custom font
    fontFamily: [
      'Nunito',
      'Quicksand',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Cantarell',
      'Noto Sans',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(1200px 600px at 10% 0%, rgba(201,223,195,0.35) 0%, rgba(201,223,195,0) 60%), radial-gradient(800px 400px at 90% 10%, rgba(233,242,226,0.6) 0%, rgba(233,242,226,0) 50%)',
          transition: 'background-color 600ms cubic-bezier(0.16,1,0.3,1), color 600ms cubic-bezier(0.16,1,0.3,1)',
        },
        '*': {
          transition: 'background-color 600ms cubic-bezier(0.16,1,0.3,1), color 600ms cubic-bezier(0.16,1,0.3,1), border-color 600ms cubic-bezier(0.16,1,0.3,1)',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          boxShadow:
            '0 2px 8px rgba(58,90,64,0.08), 0 6px 24px rgba(58,90,64,0.06)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background:
            'linear-gradient(180deg, #6B8F71 0%, #628766 100%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        containedPrimary: {
          boxShadow:
            '0 2px 6px rgba(58,90,64,0.18), 0 6px 18px rgba(58,90,64,0.12)',
        },
      },
    },
  },
});

export default theme;
