import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Layout from '../../components/Layout/Layout';
import Error from '../../pages/Error/Error';
import TV from '../../pages/TV/TV';
import TVDetail from '../../pages/TV/components/TVDetail/TVDetail';

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
        path: '/tv',
        element: <TV />,
        children: [{ path: ':id', element: <TVDetail /> }],
      },
    ],
  },
]);

export default router;
