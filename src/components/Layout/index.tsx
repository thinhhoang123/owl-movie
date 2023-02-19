import * as React from 'react';
import HeaderNav from '../HeaderNav';
import AppRouter from '../AppRouter';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main className="relative top-20 container mx-auto">
        <AppRouter />
      </main>
      <footer>this is footer</footer>
    </>
  );
}
