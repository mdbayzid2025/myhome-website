"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import NavActions from "./NavActions";
import { usePathname } from "next/navigation";


const mobileLinks = [
    { label: "Buy", href: "/buy" },
    { label: "Rent", href: "/rent" },
    { label: "For Agents", href: "/for-agents" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

const links = [
    { label: "Buy", href: "/buy" },
    { label: "Rent", href: "/rent" },
    { label: "For Agents", href: "/for-agents" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="MyHome Logo"
                            width={100}
                            height={100}
                            className="rounded-xl w-12"
                        />
                        <span className="font-semibold text-2xl">MyHome</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-1.5 rounded-md font-medium text-[15px] transition-all duration-200
                ${isActive
                                        ? "bg-[#1a3c6e] text-white"
                                        : "text-gray-700 hover:text-[#1a3c6e]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex">
                    <NavActions />
                </div>

                {/* Mobile Hamburger */}
                <Button
                    type="text"
                    icon={<MenuOutlined className="text-xl" />}
                    className="md:hidden!"
                    onClick={() => setDrawerOpen(true)}
                />
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <Link href="/" onClick={() => setDrawerOpen(false)}>
                        <Image src="/logo.png" alt="MyHome" width={40} height={40} className="rounded-xl" />
                    </Link>
                }
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                closeIcon={<CloseOutlined />}
                width={280}
            >
                <nav className="flex flex-col gap-4 mt-2">
                    {mobileLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setDrawerOpen(false)}
                                className={`px-3 py-2 rounded-md font-medium text-base transition-all
                ${isActive
                                        ? "bg-[#1a3c6e] text-white"
                                        : "text-gray-700 hover:text-[#1a3c6e]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="mt-4 flex flex-col gap-3">
                        <Button block size="large" className="!border-[#1a3c6e] !text-[#1a3c6e]" href="/auth/sign-in">
                            Sign In
                        </Button>
                        <Button block type="primary" size="large" className="!bg-[#1a3c6e]" href="/auth/signup">
                            Sign Out
                        </Button>
                    </div>
                </nav>
            </Drawer>
        </header>
    );
}