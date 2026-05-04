// components/web-pages/Properties/PropertiesDetails/PropertySidebar.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// ✅ KEY FIX: ssr: false দিলে hydration mismatch হবে না
const ContactAgentForm = dynamic(() => import('./ContactAgentForm'), {
  ssr: false,
  loading: () => (
    <div className="space-y-3 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-10 bg-gray-100 rounded-lg" />
      ))}
      <div className="h-12 bg-gray-200 rounded-lg" />
    </div>
  ),
});

export const PropertySidebar = () => {
  return (
    <div className="space-y-6">
      {/* Contact Agent Card */}
      <div className="bg-white border text-center border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 bg-[#001B4D] rounded text-white flex items-center justify-center font-bold text-xl uppercase">
            KN
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">Knight Frank</h4>
            <p className="text-sm text-gray-500">Sarah Mitchell</p>
            <p className="text-sm font-semibold text-[#1E3A8A] flex items-center gap-1 mt-1">
              +44 20 7861 1111
            </p>
          </div>
        </div>

        <h4 className="font-bold text-gray-900 mb-4 text-left">Contact Agent</h4>

        {/* ✅ Dynamically loaded - no SSR hydration issue */}
        <ContactAgentForm />
      </div>

      {/* Location card */}
      <div>
        <h4 className="font-bold text-gray-900 mb-4">Location</h4>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm relative h-[250px] cursor-pointer group">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
            alt="Map location placeholder"
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-gray-900 flex items-center gap-2">
              <MapPinIcon size={16} className="text-[#1E3A8A]" /> View on Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPinIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);