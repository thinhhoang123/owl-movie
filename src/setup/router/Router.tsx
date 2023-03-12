import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Layout from '../../components/layout/Layout';
import Error from '../../pages/Error/Error';
import Test from '../../pages/Home/Text';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
]);

export default router;
