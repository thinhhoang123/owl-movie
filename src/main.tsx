import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './setup/router/Router';
import { ThemeProvider } from '@mui/material';
import themeMUI from './setup/themeMUI/themeMUI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeMUI}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

