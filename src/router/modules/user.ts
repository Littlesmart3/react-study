import React from 'react';

const userRouter = {
  path: '/user',
  component: React.lazy(() => import('@/components/layouts/UserLayout')),
  title: '用户模块',
  routes: []
};

export default userRouter;
