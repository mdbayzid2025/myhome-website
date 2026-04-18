import React from 'react';
import { Breadcrumb, Button } from 'antd';
import { Heart, Share, MapPin } from 'lucide-react';

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Stunning Victorian Townhouse</h1>
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
            <Button icon={<Heart size={16} />} size="large" className="flex items-center gap-2 rounded-md">Save</Button>
            <Button icon={<Share size={16} />} size="large" className="flex items-center gap-2 rounded-md">Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
