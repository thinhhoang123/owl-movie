import { createTheme } from '@mui/material';

const MUITheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e41e26',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default MUITheme;
