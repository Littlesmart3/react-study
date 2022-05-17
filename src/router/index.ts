import React from "react";
import { IRouteConfig } from "./config";

const Home = React.lazy(() => import("@/pages/home/index"));
const About = React.lazy(() => import("@/pages/about/index"));

const routes: IRouteConfig[] = [
  {
    path: "/user",
    component: React.lazy(() => import("@/components/layouts/UserLayout")),
    title: "用户路由",
    redirect: "/user/login",
    children: [],
  },
  {
    title: "系统路由",
    path: "/",
    component: React.lazy(() => import("@/components/layouts/BasicLayout")),
    redirect: "/home",
    children: [
      { title: "首页", path: "/home", icon: "home", component: Home },
      { title: "关于", path: "/about", icon: "about", component: About },
    ],
  },
  {
    path: "/noFond",
    title: "页面不存在",
    component: React.lazy(() => import("@/pages/404")),
  },
];

export default routes;
