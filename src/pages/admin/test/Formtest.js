import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      //name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="商品名称"
        name="name"
        rules={[{ required: true, message: 'Please input product name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="价格"
        name="price"
        rules={[{ required: true, message: 'Please input product price!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="保存">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Demo;