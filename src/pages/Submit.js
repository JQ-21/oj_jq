import React, { useState } from 'react';
import { Card, Select, Button, message } from 'antd';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const { Option } = Select;

const Submit = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (!code.trim()) {
      message.error('请输入代码！');
      return;
    }
    // 这里添加提交代码的逻辑
    message.success('代码提交成功！');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Card title={`提交代码 - 题目 ${id}`}>
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
    </div>
  );
};

export default Submit;