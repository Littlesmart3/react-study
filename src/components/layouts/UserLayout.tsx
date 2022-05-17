import { Layout } from "antd";
import { createBrowserHistory } from "history";
import React from "react";

import { IRouteConfig } from "@/router/config";

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const history = createBrowserHistory();

  if (!localStorage.getItem("vite-react-ts-antd-token")) {
    history.push("/user/login");
  }

  return <div>UserLayout</div>;
};

export default BasicLayout;
