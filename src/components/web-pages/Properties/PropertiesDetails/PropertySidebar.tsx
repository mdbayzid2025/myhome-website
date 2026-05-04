// components/web-pages/Properties/PropertiesDetails/PropertySidebar.tsx
'use client';
import { Button } from 'antd';
import { Download, FileText } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Top Property Snippet */}
        <div className="bg-[#0f2d5e] p-4 flex gap-4 items-center">
          <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" alt="property" fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">£1,250,000</p>
            <p className="text-[#14b8a6] text-xs font-medium">10,240 sqft | Notting Hill</p>
          </div>
        </div>

        <div className="p-6">
          <h4 className="font-bold text-gray-900 mb-4 text-left text-lg">Contact Agent</h4>

          {/* ✅ Dynamically loaded - no SSR hydration issue */}
          <ContactAgentForm />
        </div>

        {/* Location card */}
        <div className='p-4'>
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

        {/* Brochure Section */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 leading-tight">Property Brochure</h4>
              <p className="text-xs text-gray-500 mt-1">Get the full property details, floorplans, and specs in a PDF format.</p>
            </div>
          </div>
          <Button
            icon={<Download size={16} />}
            className="w-full h-11 border-2 border-gray-100 hover:border-[#1a3c6e] hover:text-[#1a3c6e] rounded-xl flex items-center justify-center gap-2 font-bold transition-all"
            onClick={() => window.open('/sample-brochure.pdf', '_blank')}
          >
            Download Brochure
          </Button>
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