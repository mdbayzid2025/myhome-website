"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { mainTheme } from "./theme";

export default function AntdProvider({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider theme={mainTheme}>
            {children}
        </ConfigProvider>
    );
}
