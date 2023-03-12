import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderNav from './HeaderNav/HeaderNav';
export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  );
}
