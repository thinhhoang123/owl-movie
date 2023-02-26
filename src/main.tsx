import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e41e26',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

