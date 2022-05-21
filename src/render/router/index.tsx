import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import NotFound from '@/pages/404';
import UserRouter from './modules/user';
import BasicRouter from './modules/basic';

const GetRoutes = () => {
  const routes = useRoutes([
    BasicRouter, // 业务模块
    UserRouter, // 用户模块
    { path: '*', element: <NotFound /> } // 404
  ]);
  return routes;
};

const Router: React.FC = () => (
  <BrowserRouter>
    <GetRoutes />
  </BrowserRouter>
);
export default Router;
