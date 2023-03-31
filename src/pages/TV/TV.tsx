import * as React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export interface ITVProps {}

export default function TV(props: ITVProps) {
  const { id } = useParams();
  return <>{id ? <Outlet /> : <div>123</div>}</>;
}
