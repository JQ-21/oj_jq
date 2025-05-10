import React, { useState, useEffect } from 'react';
import { Card, Select, Button, message, Row, Col, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const { Option } = Select;
const { Title, Paragraph } = Typography;

const Submit = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState('');
  const [problem, setProblem] = useState({
    title: '两数之和',
    description: '给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: '因为 nums[0] + nums[1] == 9，返回 [0, 1]'
      }
    ]
  });

  const handleSubmit = () => {
    if (!code.trim()) {
      message.error('请输入代码！');
      return;
    }
    message.success('代码提交成功！');
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title={`题目 ${id} - ${problem.title}`}>
          <Title level={4}>题目描述</Title>
          <Paragraph>{problem.description}</Paragraph>

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
        </Card>
      </Col>
      
      <Col span={12}>
        <Card title="代码编辑器">
          <div style={{ marginBottom: '16px' }}>
            <Select
              value={language}
              onChange={setLanguage}
              style={{ width: '200px' }}
            >
              <Option value="cpp">C++</Option>
              <Option value="java">Java</Option>
              <Option value="python">Python</Option>
              <Option value="javascript">JavaScript</Option>
            </Select>
          </div>
          
          <Editor
            height="500px"
            language={language}
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              automaticLayout: true,
            }}
          />

          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <Button type="primary" onClick={handleSubmit}>
              提交代码
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Submit;