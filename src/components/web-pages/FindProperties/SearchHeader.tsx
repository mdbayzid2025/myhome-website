import React, { useState } from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { MapPin, SlidersHorizontal, Search, ChevronDown, BedDouble, PoundSterling } from 'lucide-react';
import FilterModal from './FilterModal';

export const SearchHeader = ({ setViewMode }: { setViewMode: (tab: "list" | "map") => void }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchIntent, setSearchIntent] = useState<"buy" | "rent">("buy");

  return (
    <div className="bg-white pt-4 pb-4 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Segmented Control (Buy/Rent) */}
        <div className="flex bg-gray-100/80 p-1 w-fit rounded-xl mb-5 shadow-inner">
          <button 
            onClick={() => setSearchIntent("buy")} 
            className={`px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              searchIntent === "buy" ? "bg-white text-[#1a3c6e] shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Buy
          </button>
          <button 
            onClick={() => setSearchIntent("rent")} 
            className={`px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              searchIntent === "rent" ? "bg-white text-[#1a3c6e] shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Rent
          </button>
        </div>

        {/* Refined Integrated Search Bar */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          
          {/* Main Input - More focused height */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center px-5 h-[52px] group transition-all focus-within:border-[#1a3c6e] focus-within:ring-2 ring-[#1a3c6e]/5">
            <MapPin className="text-[#1a3c6e] mr-3 opacity-40" size={18} />
            <input
              type="text"
              placeholder="Area, station or postcode..."
              className="w-full bg-transparent border-none outline-none text-gray-900 font-medium placeholder:text-gray-400 text-sm"
            />
          </div>

          <div className="flex gap-2 items-stretch h-[52px]">
            {/* Filter Toggle - Compact */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="px-6 bg-white hover:bg-gray-50 border border-gray-200 text-[#1a3c6e] rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-sm active:scale-95"
            >
              <SlidersHorizontal size={18} className="opacity-60" />
              <span className="text-sm">Filters</span>
            </button>

            {/* Primary Search Button - Focused */}
            <button className="px-10 bg-[#14b8a6] hover:bg-[#0d9488] text-white rounded-xl flex items-center justify-center gap-3 font-semibold text-sm transition-all shadow-md active:scale-95">
              <Search size={18} />
              <span className="whitespace-nowrap">Find Properties</span>
            </button>
          </div>
        </div>
      </div>

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </div>
  );
};
