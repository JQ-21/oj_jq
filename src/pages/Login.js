import React from 'react';
import { Card, Form, Input, Button, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';

const Login = () => {
  const navigate = useNavigate();
  const login = useUserStore(state => state.login);

  const onFinish = (values) => {
    // 这里添加登录逻辑
    console.log('登录信息:', values);
    login({
      username: values.username,
    });
    message.success('登录成功！');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <Card title="登录">
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="用户名" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>

          <Row justify="space-between">
            <Col>
              <Link to="/forgot-password">忘记密码？</Link>
            </Col>
            <Col>
              还没有账号？ <Link to="/register">立即注册</Link>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Login;