import * as React from 'react';
import styles from './index.module.scss';
import headerLogo from '../../assets/logo/owl-movie.svg';
import { Link } from 'react-router-dom';
import DropdownNavBar from '../DropdownNavBar/DropdownNavBar';
export interface IHeaderNavProps {}
const routerLink: { path: string; page: string; child?: any[] }[] = [
  {
    path: '/home',
    page: 'home',
  },
  {
    path: '/',
    page: 'movies',
    child: [
      { path: '/popular', page: 'Popular' },
      { path: '/nowPlaying', page: 'Now playing' },
      { path: '/upComing', page: 'Up Coming' },
      { path: '/topRate', page: 'Top Rated' },
    ],
  },
  {
    path: '/services',
    page: 'services',
  },
  {
    path: '/contact',
    page: 'contact',
  },
];
export default function HeaderNav(props: IHeaderNavProps) {
  return (
    <nav className={styles.headerNav}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={headerLogo}
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id={styles.navbarSticky}
        >
          <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm">
            {routerLink.map((route, index) => {
              const haveChild = 'child' in route;
              return haveChild ? (
                <DropdownNavBar key={index} {...route} />
              ) : (
                <li key={index}>
                  <Link to={route.path}>{route.page}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
