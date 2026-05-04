// components/web-pages/Properties/PropertiesDetails/ContactAgentForm.tsx
'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ContactAgentForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      requiredMark={false}
      className="space-y-4"
    >
      <Form.Item name="name" className="mb-0" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input placeholder="Your Name" size="large" className="bg-gray-50/50" />
      </Form.Item>

      <Form.Item name="email" className="mb-0" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
        <Input placeholder="Email Address" size="large" className="bg-gray-50/50" />
      </Form.Item>

      <Form.Item name="phone" className="mb-0" rules={[{ required: true, message: 'Please enter your phone number' }]}>
        <Input placeholder="Phone Number" size="large" className="bg-gray-50/50" />
      </Form.Item>

      <Form.Item name="message" className="mb-0" rules={[{ required: true }]}>
        <TextArea
          placeholder="I would like to arrange a viewing for..."
          rows={4}
          className="bg-gray-50/50 resize-none"
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        className="w-full bg-[#001B4D] hover:bg-[#001B4D]/90 h-12 font-medium"
      >
        Send Message
      </Button>
    </Form>
  );
};

export default ContactAgentForm;