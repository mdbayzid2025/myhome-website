"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchHeader } from "./SearchHeader";
import { Button } from "antd";
import { List, Map, Heart } from "lucide-react";
import PropertyList from "./PropertyList";
import PropertyMap from "./PropertyMap";

const FindProperties = () => {
    const searchParams = useSearchParams();
    const location = searchParams.get("location") || searchParams.get("q") || "";
    const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
    const [viewMode, setViewMode] = useState<"list" | "map">("list");

    // Sample properties (you can replace with real data from API)
    const properties = [
        {
            id: "1",
            images: ["/cardImg.png", "/cardImg.png", "/cardImg.png"],
            price: 875000,
            featured: true,
            title: "4 bed House",
            address: `42 Morning Lane, ${location || 'London'}`,
            agentLogo: "/images/customer.png",
            addedOn: "01/03/2026",
        },
        // Add more properties as needed (duplicate for demo)
    ].flatMap((p) => Array(6).fill(p)); // Creates 6 identical cards for demo

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Search Header */}
            <SearchHeader setViewMode={setViewMode} />

            {/* Results Control Bar (Sticky Sub-header feel) */}
            <div className="bg-white sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        
                        {/* Results Identity (Gestalt Principle: Proximity) */}
                        <div className="flex items-center gap-5">
                            <div className="flex flex-col border-r border-gray-200 pr-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-[#1a3c6e] leading-none">
                                        {properties.length}
                                    </span>
                                    <span className="text-gray-900 font-extrabold text-lg leading-none">
                                        Properties {location ? `in ${location}` : 'Found'}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Save Search (Secondary CTA with Affordance) */}
                            <button className="flex items-center gap-2 px-5 h-10 rounded-xl bg-[#1a3c6e]/5 text-[#1a3c6e] hover:bg-[#1a3c6e] hover:text-white transition-all text-xs font-bold active:scale-95 group">
                                <Heart size={14} className="group-hover:fill-white transition-all" />
                                <span>Save this search</span>
                            </button>
                        </div>

                        {/* Display Controls (Utility Hierarchy) */}
                        <div className="flex items-center gap-3">
                            {/* Sort (Fitts Law: Target Size) */}
                            <div className="relative group flex-1 md:flex-none">
                                <select className="h-11 bg-gray-50 border border-gray-100 rounded-xl pl-4 pr-10 text-xs font-bold text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#1a3c6e]/5 focus:bg-white appearance-none cursor-pointer transition-all min-w-[180px]">
                                    <option>Sort by: Newest First</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#1a3c6e] transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>

                            {/* View Switcher (SaaS Premium Toggle) */}
                            <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`flex items-center gap-2 px-5 h-9 rounded-lg text-xs font-bold transition-all duration-300
                                        ${viewMode === "list" 
                                            ? "bg-white text-[#1a3c6e] shadow-md shadow-gray-200" 
                                            : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    <List size={14} />
                                    <span>List</span>
                                </button>
                                <button
                                    onClick={() => setViewMode("map")}
                                    className={`flex items-center gap-2 px-5 h-9 rounded-lg text-xs font-bold transition-all duration-300
                                        ${viewMode === "map" 
                                            ? "bg-white text-[#1a3c6e] shadow-md shadow-gray-200" 
                                            : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    <Map size={14} />
                                    <span>Map</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

                {/* Conditional Rendering */}
                {viewMode === "list" ? (
                    <PropertyList properties={properties} />
                ) : (
                    <PropertyMap properties={properties} />
                )}
            </div>
        </div>
    );
};

export default FindProperties;