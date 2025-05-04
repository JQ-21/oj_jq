import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={`/problem/${record.id}`}>{text}</Link>,
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty) => (
        <Tag color={
          difficulty === 'Easy' ? 'green' :
          difficulty === 'Medium' ? 'orange' : 'red'
        }>
          {difficulty}
        </Tag>
      ),
    },
    {
      title: '通过率',
      dataIndex: 'acceptanceRate',
      key: 'acceptanceRate',
      render: (rate) => `${rate}%`,
    },
  ];

  // 模拟数据
  useEffect(() => {
    setProblems([
      {
        id: 1,
        title: '两数之和',
        difficulty: 'Easy',
        acceptanceRate: 45,
      },
      {
        id: 2,
        title: '最长回文子串',
        difficulty: 'Medium',
        acceptanceRate: 32,
      },
      // 添加更多题目...
    ]);
  }, []);

  return (
    <div>
      <h1>题目列表</h1>
      <Table
        columns={columns}
        dataSource={problems}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
};

export default ProblemList;