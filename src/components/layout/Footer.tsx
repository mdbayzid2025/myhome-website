
import { PlayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import FooterBrand from "./FooterBrand";

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Pricing", href: "/pricing" },
];

const agentLinks = [
    { label: "Pricing", href: "/agent-pricing" },
    { label: "Agent Pricing", href: "/agent-pricing/details" },
    { label: "BLM Feed", href: "/blm-feed" },
];

const quickLinks = [
    { label: "Terms & Conditions", href: "/terms-condition" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Faq", href: "/faq" },
];

export default function Footer() {
    return (
        <footer
            className="relative bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/footerBg.jpg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <FooterBrand />
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-lg">Company</h4>
                        <div className="w-10 h-[2px] bg-white/40 rounded-full" />
                        <ul className="flex flex-col gap-3">
                            {companyLinks?.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-gray-300 hover:text-[#00c2a8] transition-colors text-[15px]"
                                    >
                                        <PlayCircleOutlined className="text-sm" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-lg">For Agents</h4>
                        <div className="w-10 h-[2px] bg-white/40 rounded-full" />
                        <ul className="flex flex-col gap-3">
                            {agentLinks?.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-gray-300 hover:text-[#00c2a8] transition-colors text-[15px]"
                                    >
                                        <PlayCircleOutlined className="text-sm" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-lg">Quick Link</h4>
                        <div className="w-10 h-[2px] bg-white/40 rounded-full" />
                        <ul className="flex flex-col gap-3">
                            {quickLinks?.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-gray-300 hover:text-[#00c2a8] transition-colors text-[15px]"
                                    >
                                        <PlayCircleOutlined className="text-sm" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="border-t border-white/10 mt-12 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        Copyrights 2025. All Rights are Reserved by{" "}
                        <span className="text-[#00c2a8] font-semibold">Myhome</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}