
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";



// ✅ KEY FIX: ssr: false দিলে hydration mismatch হবে না
const DynamicFindPropertyForm = dynamic(() => import('./FindPropertyForm'), {
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


export default function HeroSection() {

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
            <div className="absolute inset-0 bg-black/50 rounded-3xl" />

            {/* Content */}
            <DynamicFindPropertyForm />
        </section>
    );
}