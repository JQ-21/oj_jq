import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, CodeOutlined, HistoryOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">题目列表</Link>,
    },
    {
      key: '/submissions',
      icon: <HistoryOutlined />,
      label: <Link to="/submissions">提交记录</Link>,
    },
    {
      key: '/login',
      icon: <UserOutlined />,
      label: <Link to="/login">登录</Link>,
    },
  ];

  return (
    <Header>
      <div className="logo" style={{ float: 'left', color: 'white', fontSize: '20px', marginRight: '24px' }}>
        Online Judge
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Header>
  );
};

export default Navbar;