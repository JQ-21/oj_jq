import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
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
  ];

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ color: 'white', fontSize: '20px', marginRight: '24px' }}>
          Online Judge
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1 }}
        />
      </div>
      <Link to="/login">
        <Avatar
          icon={<UserOutlined />}
          style={{
            backgroundColor: '#808080',
            cursor: 'pointer'
          }}
        />
      </Link>
    </Header>
  );
};

export default Navbar;