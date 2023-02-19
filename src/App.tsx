import * as React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/home');
  });
  return <>...LOADING</>;
}
