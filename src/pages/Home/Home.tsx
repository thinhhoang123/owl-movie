import * as React from 'react';
import styles from './Home.module.scss';
import { Container } from '@mui/material';
import Loading from '../../components/Loading/Loading';

const Banner = React.lazy(() => import('./components/Banner/Banner'));
const Trending = React.lazy(() => import('./components/Trending/Trending'));

export interface IAppProps {}

const Home: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Container maxWidth="xl">
        <React.Suspense fallback={<Loading />}>
          <Banner />
          <Trending />
        </React.Suspense>
      </Container>
    </>
  );
};
export default Home;
