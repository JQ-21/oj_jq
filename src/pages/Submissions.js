import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: '提交ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '题目',
      dataIndex: 'problemTitle',
      key: 'problemTitle',
      render: (text, record) => (
        <Link to={`/problem/${record.problemId}`}>{text}</Link>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = {
          'Accepted': 'success',
          'Wrong Answer': 'error',
          'Time Limit Exceeded': 'warning',
          'Runtime Error': 'error',
          'Compilation Error': 'default',
        }[status];
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '语言',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: '执行时间',
      dataIndex: 'runtime',
      key: 'runtime',
      render: (time) => `${time} ms`,
    },
    {
      title: '内存消耗',
      dataIndex: 'memory',
      key: 'memory',
      render: (memory) => `${memory} MB`,
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      key: 'submitTime',
    },
  ];

  // 模拟数据
  useEffect(() => {
    setSubmissions([
      {
        id: 1,
        problemId: 1,
        problemTitle: '两数之和',
        status: 'Accepted',
        language: 'C++',
        runtime: 4,
        memory: 8.2,
        submitTime: '2024-01-20 10:30:00',
      },
      {
        id: 2,
        problemId: 2,
        problemTitle: '最长回文子串',
        status: 'Wrong Answer',
        language: 'Python',
        runtime: 15,
        memory: 10.5,
        submitTime: '2024-01-20 10:25:00',
      },
    ]);
  }, []);

  return (
    <div>
      <h1>提交记录</h1>
      <Table
        columns={columns}
        dataSource={submissions}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
};

export default Submissions;