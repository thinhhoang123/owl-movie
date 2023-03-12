import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinkCP.module.scss';
import { Typography } from '@mui/material';

export interface INavLinkCPProps {
  path: string;
  page: string;
}

export default function NavLinkCP({ path, page }: INavLinkCPProps) {
  return (
    <div className={styles.navLinkContainer}>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? `${styles.active}` : ''
        }
      >
        <Typography variant="body1" component="div">
          {page}
        </Typography>
      </NavLink>
    </div>
  );
}
