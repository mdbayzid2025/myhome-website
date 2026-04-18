"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Skeleton } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import PropertyCard, { type Property } from "./PropertyCard";
import { myFetch } from "@/helpers/myFetch";


/* ── static fallback ── */
const mockProperties: Property[] = Array.from({ length: 4 }, (_, i) => ({
    id: `prop-${i + 1}`,
    images: ["/cardImg.png", "/cardImg.png", "/cardImg.png"],
    price: 875000,
    featured: true,
    title: "4 bed House",
    address: "42 Morning Lane, London",
    agentLogo: "/images/customer.png",
    addedOn: "01/03/2026",
}));

export default function PropertiesNearYou() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await myFetch("/properties/near-you", { method: "GET" });
                if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
                    setProperties(res.data);
                } else {
                    setProperties(mockProperties);
                }
            } catch {
                setProperties(mockProperties);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
                    Properties near you
                </h2>

                {/* Loading skeletons */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
                                <Skeleton.Image active className="!w-full !h-60" />
                                <div className="p-4">
                                    <Skeleton active paragraph={{ rows: 2 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Mobile / Tablet — Swiper carousel */}
                        <div className="block lg:hidden">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                spaceBetween={16}
                                slidesPerView={1}
                                breakpoints={{
                                    480: { slidesPerView: 1.2 },
                                    640: { slidesPerView: 2 },
                                    900: { slidesPerView: 2.5 },
                                }}
                                className="!pb-10"
                            >
                                {properties.map((property) => (
                                    <SwiperSlide key={property.id}>
                                        <PropertyCard property={property} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Desktop — 3-column grid */}
                        <div className="hidden lg:grid grid-cols-3 gap-6">
                            {properties.slice(0, 3).map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Swiper custom styles */}
            <style jsx global>{`
        .property-swiper .swiper-pagination {
          bottom: 0px;
        }
        .property-swiper .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 1;
          width: 7px;
          height: 7px;
        }
        .property-swiper .swiper-pagination-bullet-active {
          background: #0f2d5e;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
        </section>
    );
}