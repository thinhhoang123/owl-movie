import * as React from 'react';
import Trending from './components/Trending/Trending';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <Trending />
    </div>
  );
}
