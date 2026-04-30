'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';
import { Phone, FileText, Download } from 'lucide-react';
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
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Top Property Snippet */}
        <div className="bg-[#0f2d5e] p-4 flex gap-4 items-center">
            <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" alt="property" fill className="object-cover" unoptimized />
            </div>
            <div>
                <p className="text-white font-bold text-lg leading-tight">£1,250,000</p>
                <p className="text-[#14b8a6] text-xs font-medium">10,240 sqft | Notting Hill</p>
            </div>
        </div>

        <div className="p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-left text-lg">Contact Agent</h4>

            <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            requiredMark={false}
            className="space-y-4 mb-6"
            >
            <Form.Item name="name" className="mb-0" rules={[{ required: true, message: 'Please enter your name' }]}>
                <Input placeholder="Your Name" size="large" className="bg-gray-50/50 border border-gray-200 rounded-xl hover:border-[#14b8a6] focus:border-[#14b8a6]" />
            </Form.Item>

            <Form.Item name="email" className="mb-0" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                <Input placeholder="Email Address" size="large" className="bg-gray-50/50 border border-gray-200 rounded-xl hover:border-[#14b8a6] focus:border-[#14b8a6]" />
            </Form.Item>

            <Form.Item name="phone" className="mb-0" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                <Input placeholder="Phone Number" size="large" className="bg-gray-50/50 border border-gray-200 rounded-xl hover:border-[#14b8a6] focus:border-[#14b8a6]" />
            </Form.Item>

            <Form.Item name="message" className="mb-0" rules={[{ required: true }]}>
                <TextArea 
                placeholder="I would like to arrange a viewing for..." 
                rows={4} 
                className="bg-gray-50/50 border border-gray-200 resize-none rounded-xl hover:border-[#14b8a6] focus:border-[#14b8a6]"
                />
            </Form.Item>

            <Button 
                type="primary" 
                htmlType="submit" 
                size="large" 
                className="w-full bg-[#14b8a6] hover:!bg-[#119e8e] border-none h-12 font-bold text-base rounded-xl shadow-lg shadow-[#14b8a6]/20"
            >
                Send Message
            </Button>
            </Form>

            {/* Agent Info at bottom */}
            <div className="pt-5 border-t border-gray-100 flex items-center gap-4">
                <div className="relative h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Sarah Mitchell" fill className="rounded-full object-cover" unoptimized={true} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 leading-tight">Sarah Mitchell</h4>
                    <p className="text-xs text-gray-500 mb-1">Knight Frank</p>
                    <p className="text-sm font-semibold text-[#14b8a6] flex items-center gap-1">
                        +44 20 7861 1111
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Location card / map placeholder */}
      <div>
        <h4 className="font-bold text-gray-900 mb-4">Location</h4>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm relative h-[200px] cursor-pointer group">
          <Image 
            src="/london_property_map_preview_1777542952963.png" 
            alt="Property Location Map" 
            fill 
            className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-5 py-2.5 rounded-full shadow-lg text-sm font-bold text-gray-900 flex items-center gap-2 hover:scale-105 transition-transform">
                <MapPinIcon size={18} className="text-[#14b8a6]" /> View on Map
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                <FileText size={24} />
            </div>
            <div>
                <h4 className="font-bold text-gray-900 leading-tight">Property Brochure</h4>
                <p className="text-xs text-gray-500 mt-1">Get the full property details, floorplans, and specs in a PDF format.</p>
            </div>
        </div>
        <Button 
            icon={<Download size={16} />}
            className="w-full h-11 border-2 border-gray-100 hover:border-[#1a3c6e] hover:text-[#1a3c6e] rounded-xl flex items-center justify-center gap-2 font-bold transition-all"
            onClick={() => window.open('/sample-brochure.pdf', '_blank')}
        >
            Download Brochure
        </Button>
      </div>

    </div>
  );
};

// Internal MapPin component
const MapPinIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
  </svg>
)
