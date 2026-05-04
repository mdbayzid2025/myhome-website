"use client";

import type { MenuProps } from "antd";
import { Avatar, Badge, Button, Dropdown } from "antd";
import { Bell, LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function NavActions() {
    const pathname = usePathname();

    // Check if we are on a dashboard-related route
    const isDashboard = pathname.includes('/analytics') ||
        pathname.includes('/saved-search') ||
        pathname.includes('/profile') ||
        pathname.includes('/save-properties');

    const isLoggedIn = isDashboard;



    const userMenuItems: MenuProps["items"] = [
        {
            key: "profile",
            icon: <User size={16} />,
            label: <Link href="/profile" className="font-medium">My Profile</Link>
        },
        { type: "divider" },
        {
            key: "dashboard",
            icon: <LayoutDashboard size={16} className="text-[#1a3c6e]" />,
            label: (
                <Link href="/analytics" className="font-bold text-[#1a3c6e]">
                    Agent Dashboard
                </Link>
            ),
        },
        { type: "divider" },
        {
            key: "logout",
            icon: <LogOut size={16} />,
            label: <span className="cursor-pointer font-bold">Sign Out</span>,
            danger: true
        },
    ];

    if (isLoggedIn) {
        return (
            <div className="flex items-center gap-3 sm:gap-6 animate-in fade-in duration-500">
                {/* Notifications */}
                <Link href="/user-notifications">
                    <Badge count={3} size="small" offset={[-2, 2]} color="#14b8a6">
                        <div className="p-2 hover:bg-gray-50 rounded-full transition-all group">
                            <Bell className="text-gray-400 group-hover:text-[#1a3c6e] cursor-pointer" size={20} />
                        </div>
                    </Badge>
                </Link>

                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right hidden xl:block">
                            <p className="text-[13px] font-bold text-[#1a3c6e] leading-none mb-1">Westfert Admin</p>
                            <p className="text-[10px] text-gray-500 font-medium">Premium Member</p>
                        </div>
                        <Avatar
                            size={44}
                            src="/images/customer.png"
                            className="border-2 border-white ring-2 ring-[#1a3c6e]/10 group-hover:ring-[#1a3c6e]/30 transition-all shadow-sm"
                        />
                    </div>
                </Dropdown>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4">
            <Button
                size="large"
                className="!border-[#1a3c6e] !text-[#1a3c6e] !font-bold !text-[14px] !rounded-xl min-w-[100px] sm:min-w-[110px] !h-10 sm:!h-11 hover:!bg-gray-50 transition-all"
                href="/auth/login"
            >
                Sign In
            </Button>
            <Button
                type="primary"
                size="large"
                className="hidden sm:inline-flex !bg-[#1a3c6e] !border-[#1a3c6e] !font-bold !text-[14px] !rounded-xl min-w-[100px] sm:min-w-[110px] !h-10 sm:!h-11 shadow-md shadow-[#1a3c6e]/20 hover:!scale-[1.02] active:!scale-95 transition-all"
                href="/auth/signup"
            >
                Register
            </Button>
        </div>
    );
}