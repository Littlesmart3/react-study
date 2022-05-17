import React from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/router/modules';

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <div>
      UserLayout
      <div> {renderRoutes(route.routes)}</div>
    </div>
  );
};

export default BasicLayout;
