import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes, { IRouteConfig } from './modules';

export interface RouteComponentConfig extends Omit<IRouteConfig, 'component' | 'routes'> {
  routes?: RouteComponentConfig[];
  component?: React.LazyExoticComponent<React.FC<Record<string, unknown>>>;
}

const Router: React.FC = () => <HashRouter>{renderRoutes(routes)}</HashRouter>;
export default Router;
