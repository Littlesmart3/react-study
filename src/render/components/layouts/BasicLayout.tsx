import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const ZBasicLayout: React.FC = (aaa) => {
  console.log(aaa);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            backgroundColor: 'red'
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default () => <ZBasicLayout />;

// import React from 'react';

// const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
//   console.log(route);

//   return (
//     <div>
//       basiclayout
//       <div> {renderRoutes(route.routes)}</div>
//     </div>
//   );
// };

// export default BasicLayout;
