"use client";

import { Button, Avatar, Dropdown, Badge } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Bell } from "lucide-react";
import { logout } from "@/redux/feature/auth/authSlice";

export default function NavActions() {
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.auth);
    const isLoggedIn = !!user;

    const handleLogout = () => {
        dispatch(logout());
    };

    const userMenuItems: MenuProps["items"] = [
        { key: "profile", label: <Link href="/profile">My Profile</Link> },
        {
            key: "dashboard", label: (
                <Link rel="noopener noreferrer" href="/save-properties">
                    Dashboard
                </Link>
            ),
        },
        {
            key: "overview", label: (
                <Link rel="noopener noreferrer" href="/analytics">
                    Agent Dashboard
                </Link>
            ),
        },
        { type: "divider" },
        { key: "logout", label: <span onClick={handleLogout}>Sign Out</span>, danger: true },
    ];

    if (isLoggedIn) {
        return (
            <div className="items-center gap-5 hidden md:flex">
                <Link href="/user-notifications">
                    <Badge count={3} size="small" color="#0f2d5e">
                        <Bell className="text-gray-600 hover:text-[#0f2d5e] cursor-pointer" size={24} />
                    </Badge>
                </Link>
                
                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                    <Avatar
                        size={42}
                        src="/images/customer.png"
                        className="cursor-pointer border-2 border-[#1a3c6e]"
                        style={{ backgroundColor: "#1a3c6e" }}
                    >
                        {user.email ? user.email[0].toUpperCase() : 'U'}
                    </Avatar>
                </Dropdown>
            </div>
        );
    }

    return (
        <div className="items-center gap-3 hidden md:flex">
            <Button
                size="large"
                className="!border-[#1a3c6e] !text-[#1a3c6e] !font-bold !rounded-xl min-w-[110px] !h-11"
                href="/auth/login"
            >
                Sign In
            </Button>
            <Button
                type="primary"
                size="large"
                className="!bg-[#1a3c6e] !border-[#1a3c6e] !font-bold !rounded-xl min-w-[110px] !h-11 shadow-sm"
                href="/auth/signup"
            >
                Register
            </Button>
        </div>
    );
}