import * as React from 'react';
import styles from './Home.module.scss';
import Trending from './components/Trending/Trending';
import { Container } from '@mui/material';
import Banner from './components/Banner/Banner';
export interface IAppProps {}

const Home: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Container maxWidth="xl">
        <Banner />
        <Trending />
      </Container>
    </>
  );
};
export default Home;
