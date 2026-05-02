
"use client";

import { useState } from "react";
import Image from "next/image";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type SearchTab = "buy" | "rent";

const tabConfig: Record<SearchTab, { label: string; placeholder: string; path: string }> = {
    buy: { label: "Buy", placeholder: "Search homes for sale", path: "/find-properties" },
    rent: { label: "Rent", placeholder: "Search homes for rent", path: "/find-properties" },
};

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<SearchTab>("buy");
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        const trimmed = query.trim();
        router.push(trimmed ? `/find-properties?q=${encodeURIComponent(trimmed)}` : "/find-properties");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <section className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                // src="/heroImg.jpg"
                // src="/imgBg.jpg"
                src="/homeImg.png"
                alt="Beautiful property"
                fill
                className="object-cover object-center rounded-3xl"
                priority
            />

            {/* Subtle dark veil — keeps image vibrant but text legible */}
            <div className="absolute inset-0 bg-black/30 rounded-3xl" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-8">

                {/* Headline */}
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight drop-shadow-md">
                    Property Simplified
                </h1>

                {/* Search card */}
                <div className="w-full bg-[#113157] rounded-xl shadow-2xl p-6 sm:p-8">

                    {/* Tabs */}
                    <div className="flex w-full mb-6">
                        {(Object.keys(tabConfig) as SearchTab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                  flex-1 pb-3 text-lg font-bold tracking-wide transition-all duration-200
                  ${activeTab === tab
                                        ? "text-white border-b-2 border-white"
                                        : "text-white/50 border-b-[1px] border-white/30 hover:text-white/80"
                                    }
                `}
                            >
                                {tabConfig[tab].label}
                            </button>
                        ))}
                    </div>

                    {/* Search row */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* Label */}
                        <div className="w-full flex flex-col gap-2">
                            <span className="text-white/70 text-sm pl-1">
                                {tabConfig[activeTab as keyof typeof tabConfig]?.placeholder}
                            </span>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Input */}
                                <Input
                                    size="large"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Search by location or postcode or place"
                                    prefix={<SearchOutlined className="text-gray-400 text-base" />}
                                    className="
                    flex-1 !rounded-md !border-0 !bg-white
                    !text-gray-700 !placeholder-gray-400
                    !h-12 !text-sm
                  "
                                    allowClear
                                />

                                {/* CTA */}
                                <Button
                                    size="large"
                                    onClick={handleSearch}
                                    className="
                                    !h-12 !px-7 !rounded-md !border-0
                                    !bg-[#00d4a1] hover:!bg-[#00c090]
                                    !text-gray-900 !font-bold !text-sm
                                    whitespace-nowrap shrink-0 transition-colors
                                "
                                >
                                    Search Properties
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}