import * as React from 'react';
import styles from './Home.module.scss';
import Trending from './components/Trending/Trending';
import { Container } from '@mui/material';
export interface IAppProps {}

const Home: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Container maxWidth="xl">
        <Trending />
      </Container>
    </>
  );
};
export default Home;
