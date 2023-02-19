import { useRoutes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import App from '../../App';

export const Router = {
  appRouter: [
    // {
    //   path: '*',
    //   element: <ErrorPage />,
    // },
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/home',
      element: <Home />,
    },
  ],

  Home: () => '/home',
  LoginPage: () => 'login',
  WishList: () => 'wishList',
};

const AppRouter = () => {
  let routes = useRoutes(Router.appRouter);
  return routes;
};

export default AppRouter;
