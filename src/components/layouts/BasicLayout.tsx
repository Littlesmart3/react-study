import React from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/router/modules';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  console.log(route);

  return (
    <div>
      basiclayout
      <div> {renderRoutes(route.routes)}</div>
    </div>
  );
};

export default BasicLayout;
