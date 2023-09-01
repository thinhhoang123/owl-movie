import * as React from 'react';
import styles from './Layout.module.scss';
import { Container, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

export interface IHeaderNavProps {}

const links = [
  { path: '/', page: 'Home' },
  { path: '/tv', page: 'TV Shows' },
];

export default function HeaderNav(props: IHeaderNavProps) {
  const router = useRouter();
  return (
    <div className={styles['nav-header__wrapper']}>
      <Container maxWidth="xl" className={styles['nav-header__container']}>
        <nav className={styles['nav-header__content']}>
          <div className={styles['nav-header__logo']}>
            <Image src="/logo.svg" alt="OWL-MOVIE" width={30} height={30} />
          </div>
          {isMobile ? (
            <div>
              <IconButton aria-label="bar">
                <i className="fad fa-bars"></i>
              </IconButton>
            </div>
          ) : (
            <div className={styles['nav-header__links']}>
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.page}
                  className={
                    router.pathname == link.path ? styles['active'] : ''
                  }
                >
                  {link.page}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
}
