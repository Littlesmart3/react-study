import React from 'react';
import User from './user';

export interface IRouteConfig {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title: string;
  icon?: string;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  routes?: IRouteConfig[];
}

// 路由数组
const routers: IRouteConfig[] = [
  {
    path: '/login',
    component: React.lazy(() => import('@/pages/login/index')),
    title: '登陆模块',
    routes: []
  },
  User,
  {
    path: '/',
    title: '系统路由',
    component: React.lazy(() => import('@/components/layouts/BasicLayout')),
    // redirect: '/home',
    routes: [
      { title: '首页', path: '/home', icon: 'home', component: React.lazy(() => import('@/pages/home/index')) },
      { title: '关于', path: '/about', icon: 'about', component: React.lazy(() => import('@/pages/about/index')) }
    ]
  },
  {
    path: '/404',
    title: '页面不存在',
    component: React.lazy(() => import('@/pages/404'))
  }
];

export default routers;
