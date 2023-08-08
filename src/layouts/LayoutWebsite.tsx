import React from 'react';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/app/hooks';
import { show } from '@/slices/Cart';
import CartModal from '@/components/Cart';

const { Header, Content, Footer } = Layout;

const LayoutWebsite: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      label: <Link to={'/'}>Trang chủ</Link>,
      key: 'home',
    },
    {
      label: <Link to={'/admin'}>Trang quản trị</Link>,
      key: 'admin',
    },
    {
      label: 'Giỏ hàng',
      key: 'cart',
      onClick: () => dispatch(show()),
    },
  ];

  return (
    <Layout className='layout h-screen'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Header>
      <Content style={{ padding: '18px 50px' }}>
        <div
          className='site-layout-content px-4 py-6'
          style={{ background: colorBgContainer }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutWebsite;
