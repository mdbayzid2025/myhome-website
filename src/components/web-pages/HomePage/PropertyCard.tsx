"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CameraOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export interface Property {
  id: string;
  images: string[];
  price: number;
  featured: boolean;
  title: string;
  address: string;
  agentLogo?: string;
  addedOn: string;
}

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const total = property.images.length;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    swiperRef.current?.slidePrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex + 1);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Link href={`/properties/${property.id}`} className="block group">
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">

        {/* Image Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            className="property-swiper h-56 sm:h-70 md:h-74"
          >
            {property.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`${property.title} - image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className={`
              absolute left-3 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full flex items-center justify-center
              backdrop-blur-sm transition-all duration-200
              ${isBeginning
                ? "bg-white/30 text-white/40 cursor-not-allowed"
                : "bg-white/80 text-[#1a3c6e] hover:bg-white hover:scale-105 shadow-md cursor-pointer"
              }
            `}
          >
            <LeftOutlined className="text-xs" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isEnd}
            className={`
              absolute right-3 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full flex items-center justify-center
              backdrop-blur-sm transition-all duration-200
              ${isEnd
                ? "bg-white/30 text-white/40 cursor-not-allowed"
                : "bg-white/80 text-[#1a3c6e] hover:bg-white hover:scale-105 shadow-md cursor-pointer"
              }
            `}
          >
            <RightOutlined className="text-xs" />
          </button>

          {/* Photo counter badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#1a3c6e]/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
            <CameraOutlined className="text-xs" />
            {currentSlide}/{total}
          </div>

          {/* Price + Featured banner */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex">
            <div className="flex-1 bg-[#14b8a6] px-4 py-2.5">
              <span className="text-white font-extrabold text-xl tracking-tight">
                £{property.price.toLocaleString()}
              </span>
            </div>
            {property.featured && (
              <div className="bg-[#1a3c6e] px-5 py-2.5 flex items-center justify-center text-center min-w-[120px]">
                <span className="text-white text-xs font-bold uppercase leading-tight tracking-wider">
                  Featured<br />Property
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="px-4 pt-4 pb-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-base truncate group-hover:text-[#1a3c6e] transition-colors">
                {property.title}
              </h3>
              <p className="text-[#1a3c6e] text-sm mt-0.5 truncate">
                {property.address}
              </p>
            </div>

            {/* Agent logo */}
            {property.agentLogo && (
              <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-gray-100 shrink-0">
                <Image
                  src={property.agentLogo}
                  alt="Agent"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
            )}
          </div>

          <p className="text-gray-400 text-xs mt-4">
            Added on {property.addedOn}
          </p>
        </div>
      </div>
    </Link>
  );
}