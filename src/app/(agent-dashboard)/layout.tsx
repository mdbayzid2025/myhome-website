"use client";

import AgentDashboardSidebar from "@/components/layout/AgentDashboardSidebar";
import DashboardSidebar from "@/components/web-pages/dashboard-sidebar";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { ReactNode, useState } from "react";

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 72;

const Layout = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex bg-[#ddd] h-[90vh]">

            {/* ── Desktop Sidebar ── */}
            <div
                className="hidden lg:block flex-shrink-0 transition-all duration-300"
                style={{ width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH }}
            >
                <AgentDashboardSidebar collapsed={collapsed} onCollapse={setCollapsed} />
            </div>

            {/* ── Mobile Drawer ── */}
            <Drawer
                placement="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                width={SIDEBAR_WIDTH}
                styles={{ body: { padding: 0 }, header: { display: "none" } }}
                className="lg:hidden"
            >
                <DashboardSidebar
                    collapsed={false}
                    onCollapse={() => setMobileOpen(false)}
                />
            </Drawer>

            {/* ── Main Content ── */}
            <div className="flex-1 flex overflow-y-auto flex-col min-w-0">
                {/* Mobile Top Bar */}
                <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-50">
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: 18 }} />}
                        onClick={() => setMobileOpen(true)}
                        style={{ padding: "4px 8px" }}
                    />
                    <span className="font-semibold text-gray-800 text-sm">Westfert</span>
                </div>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
        </div>
    );
};

export default Layout;