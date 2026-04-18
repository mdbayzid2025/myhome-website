"use client";

import { useState } from "react";
import { SearchHeader } from "./SearchHeader"; // Assuming you have this
import { Button } from "antd";
import { List, Map } from "lucide-react";
import PropertyList from "./PropertyList";
import PropertyMap from "./PropertyMap";

const FindProperties = () => {
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
            address: "42 Morning Lane, London",
            agentLogo: "/images/customer.png",
            addedOn: "01/03/2026",
        },
        // Add more properties as needed (duplicate for demo)
    ].flatMap((p) => Array(6).fill(p)); // Creates 6 identical cards for demo

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Search Header */}
            <SearchHeader setViewMode={setViewMode} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* View Toggle + Results Info */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                    {/* Left */}

                    <h2 className="text-lg sm:text-xl capitalize lg:text-2xl mb-10 font-semibold text-gray-900">
                        6 Properties Found
                    </h2>

                    {/* Right */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">

                        {/* Sort Dropdown */}
                        <select className="w-full sm:w-auto bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2d5e]">
                            <option>Newest First</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>

                        {/* List / Map Toggle */}
                        <div className="flex w-full sm:w-auto gap-2 rounded-lg overflow-hidden">
                            <Button
                                size="large"
                                type={viewMode === "list" ? "primary" : "default"}
                                icon={<List size={18} />}
                                onClick={() => setViewMode("list")}
                                className={`flex-1 sm:flex-none ${viewMode === "list" ? "bg-[#0f2d5e]" : ""
                                    } border-none`}
                            >
                                List
                            </Button>

                            <Button
                                size="large"
                                type={viewMode === "map" ? "primary" : "default"}
                                icon={<Map size={18} />}
                                onClick={() => setViewMode("map")}
                                className={`flex-1 sm:flex-none ${viewMode === "map" ? "bg-[#0f2d5e]" : ""
                                    } border-none`}
                            >
                                Map
                            </Button>
                        </div>
                    </div>
                </div>

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