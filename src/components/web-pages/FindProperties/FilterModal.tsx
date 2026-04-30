"use client";

import React, { useState } from 'react';
import { Modal, Slider, Button } from 'antd';
import { 
  Wifi, 
  Car, 
  Wind, 
  Waves, 
  Tv, 
  Flame, 
  X,
  Home,
  Building2,
  Warehouse
} from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100000, 2000000]);
  const [beds, setBeds] = useState<string>("3");
  const [baths, setBaths] = useState<string>("2");
  const [activeType, setActiveType] = useState<string>("House");

  const amenities = [
    { icon: <Wifi size={20} />, label: "WiFi" },
    { icon: <Car size={20} />, label: "Parking" },
    { icon: <Wind size={20} />, label: "AC" },
    { icon: <Waves size={20} />, label: "Pool" },
    { icon: <Tv size={20} />, label: "TV" },
    { icon: <Flame size={20} />, label: "Heating" },
  ];

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closeIcon={<X className="text-gray-400 hover:text-gray-600" />}
      width={600}
      centered
      className="filter-modal"
      title={<h3 className="text-xl font-bold text-gray-900 px-2 pt-2">Advanced Filters</h3>}
    >
      <div className="py-4 space-y-8 max-h-[70vh] overflow-y-auto px-4">
        
        {/* Property Type */}
        <section>
          <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em] mb-4">Property Type</h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'House', icon: <Home /> },
              { id: 'Apartment', icon: <Building2 /> },
              { id: 'Studio', icon: <Warehouse /> }
            ].map((type) => (
              <button 
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all gap-2 group ${
                  activeType === type.id 
                    ? 'border-[#0f2d5e] bg-[#0f2d5e]/5' 
                    : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className={`${activeType === type.id ? 'text-[#0f2d5e]' : 'text-gray-400'}`}>
                  {type.icon}
                </div>
                <span className={`text-xs font-bold ${activeType === type.id ? 'text-[#0f2d5e]' : 'text-gray-600'}`}>{type.id}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Price Range */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em]">Price Range</h4>
            <span className="text-[#0f2d5e] font-bold text-sm bg-[#0f2d5e]/10 px-3 py-1 rounded-full">
              £{(priceRange[0]/1000).toFixed(0)}k - £{(priceRange[1]/1000).toFixed(0)}k
            </span>
          </div>
          <Slider
            range
            min={50000}
            max={5000000}
            step={10000}
            value={priceRange}
            onChange={(val) => setPriceRange(val as [number, number])}
            styles={{
              track: { background: '#0f2d5e' },
              handle: { borderColor: '#0f2d5e', background: '#0f2d5e' }
            }}
          />
        </section>

        {/* Bedrooms & Bathrooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em] mb-4">Bedrooms</h4>
            <div className="flex gap-2">
              {['1', '2', '3', '4', '5+'].map((num) => (
                <button 
                  key={num}
                  onClick={() => setBeds(num)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    beds === num 
                      ? 'bg-[#0f2d5e] text-white shadow-lg shadow-[#0f2d5e]/20' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em] mb-4">Bathrooms</h4>
            <div className="flex gap-2">
              {['1', '2', '3', '4+'].map((num) => (
                <button 
                  key={num}
                  onClick={() => setBaths(num)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    baths === num 
                      ? 'bg-[#0f2d5e] text-white shadow-lg shadow-[#0f2d5e]/20' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Amenities */}
        <section>
          <h4 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.1em] mb-4">Amenities</h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {amenities.map((item) => (
              <button 
                key={item.label}
                className="flex flex-col items-center justify-center p-3 border border-gray-50 rounded-2xl hover:border-[#0f2d5e] hover:bg-[#0f2d5e]/5 transition-all gap-1 group"
              >
                <div className="text-gray-400 group-hover:text-[#0f2d5e]">{item.icon}</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="flex gap-4 mt-8 pt-6 pb-2 border-t border-gray-100 px-4">
        <button 
          className="flex-1 h-12 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => {
            setPriceRange([100000, 2000000]);
            setBeds("3");
            setBaths("2");
          }}
        >
          Reset All
        </button>
        <button 
          className="flex-[2] h-12 rounded-xl font-bold bg-[#0f2d5e] text-white hover:bg-[#0a1f42] transition-colors shadow-lg shadow-[#0f2d5e]/30"
          onClick={onClose}
        >
          Show Results
        </button>
      </div>
    </Modal>
  );
};

export default FilterModal;
