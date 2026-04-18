'use client';

import React from 'react';
import { Tabs } from 'antd';
import { Camera, Video, Maximize } from 'lucide-react';
import Image from 'next/image';

export const PropertyGallery = () => {
  return (
    <div className="mb-8">
      <div className="bg-white">
        <Tabs
          defaultActiveKey="1"
          className="mb-4 property-gallery-tabs"
          items={[
            {
              key: '1',
              label: (
                <span className="flex items-center gap-2 px-4">
                  <Camera size={16} /> Photos
                </span>
              ),
            },
            {
              key: '2',
              label: (
                <span className="flex items-center gap-2 px-4">
                  <Video size={16} /> Videos
                </span>
              ),
            },
            {
              key: '3',
              label: (
                <span className="flex items-center gap-2 px-4">
                  <Maximize size={16} /> Floorplan
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-[450px]">
        {/* Main image */}
        <div className="relative h-[300px] md:h-full w-full rounded-tl-lg rounded-bl-lg overflow-hidden group cursor-pointer">
          <Image
            src="/about-img2.jpg"
            alt="Main property view"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Small images grid */}
        <div className="grid grid-cols-2 gap-2 h-[300px] md:h-full">
          <div className="relative w-full h-full group cursor-pointer overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600"
              alt="Living Room"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"

            />
          </div>
          <div className="relative w-full h-full rounded-tr-lg overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600"
              alt="Exterior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"

            />
          </div>
          <div className="relative w-full h-full group cursor-pointer overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
              alt="Kitchen"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"

            />
          </div>
          <div className="relative w-full h-full rounded-br-lg overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600"
              alt="Bathroom"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-all group-hover:bg-black/60">
              <span className="text-white font-medium text-lg">+7 More</span>
              <span className="text-white font-medium text-lg">Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
