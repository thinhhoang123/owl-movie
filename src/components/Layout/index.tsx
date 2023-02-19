import * as React from 'react';
import HeaderNav from '../HeaderNav';
import AppRouter from '../AppRouter';
import Footer from '../Footer/Footer';
import styles from './index.module.scss';
export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main className="container mx-auto pt-20">
        <AppRouter />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
