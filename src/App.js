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

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content style={{ padding: '24px', background: '#fff' }}>
          <Routes>
            <Route path="/" element={<ProblemList />} />
            <Route path="/problem/:id" element={<ProblemDetail />} />
            <Route path="/submit/:id" element={<Submit />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
