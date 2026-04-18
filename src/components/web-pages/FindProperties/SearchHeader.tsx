import React from 'react';
import { Button } from 'antd';
import { MapPin, SlidersHorizontal, Search } from 'lucide-react';

export const SearchHeader = ({ setViewMode }: { setViewMode: (tab: "list" | "map") => void }) => {
  return (
    <div className="bg-[#0f2d5e] pt-6 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 mb-4 border-b border-white/20">
          <button onClick={() => setViewMode("list")} className="text-white font-bold text-lg pb-2 border-b-2 border-white">List</button>
          <button onClick={() => setViewMode("map")} className="text-white/70 hover:text-white font-medium text-lg pb-2 border-b-2 border-transparent transition-colors">Map</button>
        </div>
        <div className="bg-white rounded-lg p-2.5 flex flex-col md:flex-row gap-3 items-center shadow-md">
          <div className="flex-1 w-full flex items-center bg-transparent px-3 h-12 focus-within:ring-2 ring-[#0f2d5e]/20 transition-all rounded-md">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Location or postcode..."
              className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
            <Button
              size="large"
              icon={<SlidersHorizontal size={18} />}
              className="h-12 flex-1 md:flex-none flex items-center justify-center  border-gray-200 text-gray-700 hover:text-[#0f2d5e] hover:border-[#0f2d5e] rounded-md font-medium px-6"
            >
              Filter
            </Button>
            <Button
              type="primary"
              size="large"
              icon={<Search size={18} />}
              className="h-12 flex-1 md:flex-none bg-[#0a1f42] hover:bg-[#0a1f42]/90 flex items-center justify-center font-bold px-8 rounded-md outline-none border-none"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
