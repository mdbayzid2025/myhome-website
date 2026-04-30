'use client';

import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Camera, Video, Maximize, Orbit } from 'lucide-react';
import Image from 'next/image';

export const PropertyGallery = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className="mb-8">
      <div className="bg-white">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="mb-4 property-gallery-tabs"
          items={[
            {
              key: '1',
              label: (
                <span className="flex items-center gap-2 px-4 text-sm font-semibold">
                  <Camera size={18} /> Photos
                </span>
              ),
            },
            {
              key: '2',
              label: (
                <span className="flex items-center gap-2 px-4 text-sm font-semibold">
                  <Video size={18} /> Videos
                </span>
              ),
            },
            {
              key: '3',
              label: (
                <span className="flex items-center gap-2 px-4 text-sm font-semibold">
                  <Orbit size={18} /> 360 Tour
                </span>
              ),
            },
            {
              key: '4',
              label: (
                <span className="flex items-center gap-2 px-4 text-sm font-semibold">
                  <Maximize size={18} /> Floorplan
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* Render Content Based on Active Tab */}
      {activeTab === '1' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-[450px]">
          {/* Main image */}
          <div className="relative h-[300px] md:h-full w-full rounded-tl-xl rounded-bl-xl overflow-hidden group cursor-pointer shadow-sm">
            <Image
              src="/about-img2.jpg"
              alt="Main property view"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Small images grid */}
          <div className="grid grid-cols-2 gap-2 h-[300px] md:h-full">
            <div className="relative w-full h-full group cursor-pointer overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600"
                alt="Living Room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="relative w-full h-full rounded-tr-xl overflow-hidden group cursor-pointer shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600"
                alt="Exterior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="relative w-full h-full group cursor-pointer overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
                alt="Kitchen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="relative w-full h-full rounded-br-xl overflow-hidden group cursor-pointer shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600"
                alt="Bathroom"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0f2d5e]/70 flex flex-col items-center justify-center transition-all group-hover:bg-[#0f2d5e]/80">
                <span className="text-white font-bold text-2xl">+7</span>
                <span className="text-white/90 font-medium text-sm">More Photos</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === '2' && (
        <div className="w-full h-[450px] bg-gray-900 rounded-xl overflow-hidden relative flex items-center justify-center group cursor-pointer shadow-sm">
            <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" alt="Video thumbnail" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" unoptimized />
            <div className="absolute z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-white/30 transition-all">
                <Video size={32} className="text-white ml-2" />
            </div>
            <p className="absolute bottom-6 left-6 text-white font-bold text-lg drop-shadow-md">Property Walkthrough</p>
        </div>
      )}

      {activeTab === '3' && (
        <div className="w-full h-[450px] bg-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center group cursor-pointer shadow-sm">
            <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" alt="360 Tour thumbnail" fill className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" unoptimized />
            <div className="absolute z-10 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-black/80 transition-all text-white font-bold gap-3">
                <Orbit size={24} /> Enter 360° Tour
            </div>
        </div>
      )}

      {activeTab === '4' && (
        <div className="w-full h-[450px] bg-white border border-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center group shadow-sm p-8">
            <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" alt="Full Floorplan" fill className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.02]" unoptimized />
            <div className="absolute bottom-6 right-6 bg-white border border-gray-200 shadow-md p-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <Maximize size={20} className="text-gray-700" />
            </div>
        </div>
      )}
    </div>
  );
};
