import Image from "next/image";
import Link from "next/link";

export default function FooterBrand() {
    return (
        <div className="flex flex-col gap-5">
            <Image src="/logo.png" alt="MyHome" width={56} height={56} className="rounded-xl" />
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[300px]">
                The UK&apos;s modern property marketplace. Search, save, and connect with agents across
                England, Scotland, Wales and Northern Ireland.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
                <Link
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18 23.76a2 2 0 0 0 2.05-.22l11.65-6.73-2.55-2.55-11.15 9.5zM.5 1.05A2 2 0 0 0 0 2.5v19a2 2 0 0 0 .5 1.45L.6 23 13.07 10.5v-.27L.6 1 .5 1.05zM20.3 9.06l-3.3-1.9-2.85 2.85 2.85 2.85 3.33-1.92a1.93 1.93 0 0 0 0-3.38v.5zM3.18.24L14.88 6.97l-2.55 2.55L1.23.47A2 2 0 0 1 3.18.24z" />
                    </svg>
                    <div>
                        <span className="block text-white/60 text-[9px] uppercase tracking-wide">Get it on</span>
                        <span className="block text-white font-semibold text-sm">Google Play</span>
                    </div>
                </Link>
                <Link
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div>
                        <span className="block text-white/60 text-[9px] uppercase tracking-wide">Download on the</span>
                        <span className="block text-white font-semibold text-sm">App Store</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}