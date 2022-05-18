import React from 'react';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/router/modules';

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
