'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const { TextArea } = Input;

export const PropertySidebar = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="space-y-6">
      
      {/* Contact Agent Card */}
      <div className="bg-white border text-center border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 bg-[#001B4D] rounded text-white flex items-center justify-center font-bold text-xl uppercase">
            KN
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">Knight Frank</h4>
            <p className="text-sm text-gray-500">Sarah Mitchell</p>
            <p className="text-sm font-semibold text-[#1E3A8A] flex items-center gap-1 mt-1">
              +44 20 7861 1111
            </p>
          </div>
        </div>

        <h4 className="font-bold text-gray-900 mb-4 text-left">Contact Agent</h4>

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
      </div>

      {/* Location card / map placeholder */}
      <div>
        <h4 className="font-bold text-gray-900 mb-4">Location</h4>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm relative h-[250px] cursor-pointer group">
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
            alt="Map location placeholder" 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-gray-900 flex items-center gap-2">
                <MapPinIcon size={16} className="text-[#1E3A8A]" /> View on Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal MapPin component to keep imports clean above
const MapPinIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
  </svg>
)
