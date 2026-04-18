"use client";

import { Button, Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";

// Mock: replace with real auth state
const useAuth = () => ({ isLoggedIn: true, user: { avatar: "/logo.png", role: 'USER' } as null | { avatar?: string } });

const userMenuItems: MenuProps["items"] = [
    { key: "profile", label: "My Profile" },
    {
        key: "dashboard", label: (
            <Link rel="noopener noreferrer" href="/save-properties">
                Dashboard
            </Link>
        ),
    },
    { type: "divider" },
    { key: "logout", label: "Sign Out", danger: true },
];

export default function NavActions() {
    const { isLoggedIn, user } = useAuth();

    if (isLoggedIn) {
        return (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                <Avatar
                    size={42}
                    src={user?.avatar}
                    className="cursor-pointer border-2 border-[#1a3c6e]"
                    style={{ backgroundColor: "#1a3c6e" }}
                >
                    U
                </Avatar>
            </Dropdown>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <Button
                size="large"
                className="!border-[#1a3c6e] !text-[#1a3c6e] !font-semibold !rounded-md"
                href="/auth/login"
            >
                Sign In
            </Button>
            <Button
                type="primary"
                size="large"
                className="!bg-[#1a3c6e] !border-[#1a3c6e] !font-semibold !rounded-md"
                href="/auth/signup"
            >
                Register
            </Button>
        </div>
    );
}