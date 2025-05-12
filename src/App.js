import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import ProblemList from './pages/ProblemList';
import ProblemDetail from './pages/ProblemDetail';
import Submit from './pages/Submit';
import Submissions from './pages/Submissions';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<ProblemList />} />
            <Route path="/problem/:id" element={<ProblemDetail />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
