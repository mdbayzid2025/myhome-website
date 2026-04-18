import React from 'react';
import { PropertyHeader } from './PropertyHeader';
import { PropertyGallery } from './PropertyGallery';
import { PropertyContent } from './PropertyContent';
import { PropertySidebar } from './PropertySidebar';

const PropertiesDetails = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <PropertyHeader />

        {/* Gallery Section */}
        <PropertyGallery />

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Info (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <PropertyContent />
          </div>

          {/* Sidebar Info (Takes up 1 column on large screens) */}
          <div className="lg:col-span-1">
             <div className="sticky top-8">
               <PropertySidebar />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;