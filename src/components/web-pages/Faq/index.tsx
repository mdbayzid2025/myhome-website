'use client';

import React from 'react';
import { Collapse } from 'antd';
import { HelpCircle, UserCheck, Key, Briefcase } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

const { Panel } = Collapse;

export const FaqPage = () => {
  const faqs = [
    {
      key: '1',
      question: 'How do I add a new property listing?',
      answer: 'Go to the Listings tab and tap "Add New Listing". Fill in all property details, upload photos, and tap Publish.',
    },
    {
      key: '2',
      question: 'How do featured listings work?',
      answer: 'Featured listings appear at the top of search results and are highlighted to get more views from potential buyers and renters. You can feature a listing from your dashboard.',
    },
    {
      key: '3',
      question: 'When will I receive enquiry notifications?',
      answer: 'You will receive notifications instantly via email and within your dashboard as soon as a prospective buyer or tenant sends an enquiry through the property page.',
    },
    {
      key: '4',
      question: 'How do I change my subscription plan?',
      answer: 'Go to your Account Settings and navigate to the Subscription section. From there, you can upgrade, downgrade, or cancel your current plan at any time.',
    },
    {
      key: '5',
      question: 'Can I export my payment history?',
      answer: 'Yes, you can export your payment history in CSV or PDF format directly from the Billing and Invoices section of your agent dashboard.',
    },
    {
      key: '6',
      question: 'How do I get my listings approved faster?',
      answer: 'To get your listings approved faster, ensure all required fields are filled accurately, use high-quality images, and provide a comprehensive, accurate property description.',
    },
    {
      key: '7',
      question: 'Is there a limit to how many photos I can upload per property?',
      answer: 'Standard accounts allow up to 20 high-resolution photos per listing, while premium accounts allow up to 50 photos, including virtual tours and floorplans.',
    },
    {
      key: '8',
      question: 'How do I update the status of a property to "Sold"?',
      answer: 'Navigate to your Active Listings, click on the property you wish to update, select "Edit Status", and choose "Sold" or "Let Agreed" from the dropdown menu.',
    },
    {
      key: '9',
      question: 'What are the requirements for a virtual tour?',
      answer: 'Virtual tours must be hosted on a supported platform (such as Matterport) and provided as an embeddable URL. You can paste this URL into the "Virtual Tour" field when editing a property.',
    },
    {
      key: '10',
      question: 'How do I contact support if I experience technical issues?',
      answer: 'If you encounter any issues, you can click the "Contact Support" button at the bottom of this page, or reach out directly to our technical team via the live chat widget in your dashboard.',
    },
  ];

  const customExpandIcon = ({ isActive }: any) => (
    <div className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12 md:pb-20">
      
      <PageHeader title="FAQ" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d5e] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Find answers to the most common questions about managing your properties and account.
          </p>
        </div>

        {/* Single FAQ List Modernized */}
        <div className="w-full">
          <Collapse 
            ghost 
            expandIcon={customExpandIcon}
            expandIconPosition="end"
            className="faq-collapse flex flex-col gap-4"
            defaultActiveKey={['1']}
          >
            {faqs.map((faq) => (
              <Panel 
                header={<span className="text-base font-bold text-gray-900">{faq.question}</span>} 
                key={faq.key}
                className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#14b8a6] transition-all duration-300 shadow-sm"
              >
                <div className="px-1 pb-4">
                  <p className="text-gray-600 leading-relaxed text-[15px]">{faq.answer}</p>
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 bg-[#0f2d5e] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-[#14b8a6] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-[#14b8a6] rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Still have questions?</h3>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                    If you couldn't find the answer you were looking for, our friendly support team is here to help you 24/7.
                </p>
                <button className="bg-[#14b8a6] hover:bg-[#119e8e] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
                    Contact Support
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};
