import * as React from 'react';
import Trending from './components/Trending/Trending';
import Banner from './components/Banner/Banner';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <div className="mx-auto">
        <Banner />
      </div>
      <div className="container mx-auto mt-20">
        <Trending />
      </div>
    </div>
  );
}
