import React from 'react';
import { Card, Typography, Divider, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { CodeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProblemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 模拟题目数据
  const problem = {
    id: id,
    title: '两数之和',
    description: '给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。',
    inputFormat: '第一行输入一个数组 nums，第二行输入目标值 target',
    outputFormat: '返回两个整数的下标',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: '因为 nums[0] + nums[1] == 9，返回 [0, 1]'
      }
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109'
    ]
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <Title level={2}>{problem.title}</Title>
        <Button 
          type="primary" 
          icon={<CodeOutlined />}
          onClick={() => navigate(`/submit/${id}`)}
          style={{ marginBottom: '20px' }}
        >
          提交代码
        </Button>

        <Divider />
        
        <Title level={4}>题目描述</Title>
        <Paragraph>{problem.description}</Paragraph>

        <Title level={4}>输入格式</Title>
        <Paragraph>{problem.inputFormat}</Paragraph>

        <Title level={4}>输出格式</Title>
        <Paragraph>{problem.outputFormat}</Paragraph>

        <Title level={4}>示例</Title>
        {problem.examples.map((example, index) => (
          <Card key={index} style={{ marginBottom: '16px' }} type="inner">
            <Paragraph>
              <strong>输入：</strong> {example.input}
            </Paragraph>
            <Paragraph>
              <strong>输出：</strong> {example.output}
            </Paragraph>
            {example.explanation && (
              <Paragraph>
                <strong>解释：</strong> {example.explanation}
              </Paragraph>
            )}
          </Card>
        ))}

        <Title level={4}>限制条件</Title>
        <ul>
          {problem.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ProblemDetail;