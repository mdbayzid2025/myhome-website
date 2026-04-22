import React from 'react';
import { Bed, Bath, Square, Home, CheckCircle2 } from 'lucide-react';
import { Table } from 'antd';

export const PropertyContent = () => {
  // Property Info Table Columns & Data
  const columns = [
    { title: 'Feature', dataIndex: 'feature', key: 'feature', className: 'text-gray-500 font-medium w-1/3' },
    { title: 'Value', dataIndex: 'value', key: 'value', className: 'text-gray-900 font-medium' },
  ];

  const data = [
    { key: '1', feature: 'Tenure', value: 'Freehold' },
    { key: '2', feature: 'Council Tax', value: 'Band G' },
    { key: '3', feature: 'EPC Rating', value: 'C' },
    { key: '4', feature: 'Open to Offers', value: 'Yes' },
    { key: '5', feature: 'Virtual Viewings', value: 'Available' },
  ];

  const keyFeatures = [
    'Period Features',
    'Open Plan Kitchen',
    'High Ceilings',
    'Off-Street Parking',
    'Garden',
    'Wooden Floors',
    'Wine Cellar',
    'Recently Renovated'
  ];

  return (
    <div className="space-y-10">
      {/* Property Summary Icons */}
      <div className="flex flex-wrap items-center gap-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Bed className="text-[#1E3A8A]" size={20} />
          <span>4 Bedrooms</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Bath className="text-[#1E3A8A]" size={20} />
          <span>3 Bathrooms</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Square className="text-[#1E3A8A]" size={20} />
          <span>2,400 sq ft</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <Home className="text-[#1E3A8A]" size={20} />
          <span>terraced</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Property Description</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          An exquisite Victorian townhouse in the heart of Notting Hill. This beautifully restored property features original period details combined with modern luxury. The open-plan kitchen-diner leads to a stunning landscaped garden, perfect for entertaining. The upper floors provide generous bedroom accommodation and contemporary bathrooms.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
              <CheckCircle2 className="text-teal-500" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Property Information Table */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Property Information</h3>
        <div className="border border-gray-100 bg-white rounded-lg overflow-hidden">
          <Table          
            columns={columns}
            dataSource={data}
            pagination={false}
            showHeader={false}
            rowClassName="hover:bg-white"
          />
        </div>
      </div>

      {/* Energy Performance */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Performance</h3>
        <div className="border border-gray-100 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#009254] text-white text-xs font-bold px-3 py-1 w-[40%] rounded-sm h-6 flex justify-between items-center">
                <span>92 - 100</span>
                <span>A</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#51A348] text-white text-xs font-bold px-3 py-1 w-[50%] rounded-sm h-6 flex justify-between items-center">
                <span>81 - 90</span>
                <span>B</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#8CB93A] text-white text-xs font-bold px-3 py-1 w-[60%] rounded-sm h-6 flex justify-between items-center relative">
                <span>70 - 80</span>
                <span>C</span>
                {/* Current Indicator */}
                <div className="absolute -right-16 text-xs text-gray-900 font-bold bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm">
                  Current
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#EEB211] text-white text-xs font-bold px-3 py-1 w-[70%] rounded-sm h-6 flex justify-between items-center">
                <span>59 - 69</span>
                <span>D</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E78622] text-white text-xs font-bold px-3 py-1 w-[80%] rounded-sm h-6 flex justify-between items-center">
                <span>39 - 58</span>
                <span>E</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E05328] text-white text-xs font-bold px-3 py-1 w-[90%] rounded-sm h-6 flex justify-between items-center">
                <span>21 - 38</span>
                <span>F</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#D21D28] text-white text-xs font-bold px-3 py-1 w-full rounded-sm h-6 flex justify-between items-center">
                <span>1 - 20</span>
                <span>G</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
