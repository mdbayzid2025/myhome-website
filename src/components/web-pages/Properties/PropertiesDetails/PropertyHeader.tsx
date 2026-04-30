import React from 'react';
import { Breadcrumb, Button } from 'antd';
import { Heart, MapPin } from 'lucide-react';

export const PropertyHeader = () => {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <Breadcrumb
          separator=">"
          items={[
            { title: 'Home' },
            { title: 'For Sale' },
            { title: 'London' },
            { title: 'Stunning Victorian Townhouse' },
          ]}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Stunning Victorian Townhouses</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <MapPin size={16} />
            42 Kensington Park Road
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="text-left md:text-right">
            <h2 className="text-3xl font-bold text-[#1E3A8A]">£1.3m</h2>
            <p className="text-sm text-gray-500">Guide Price</p>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0">
            <Button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 min-w-[120px] font-semibold text-gray-700 border-gray-200 hover:!border-[#14b8a6] hover:!text-[#14b8a6] text-base">
                <Heart size={18} /> Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
