// import { AntdRegistry } from "@ant-design/nextjs-registry";
import AuthLayout from "@/components/layout/AuthLayout";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <AntdRegistry>
      <AuthLayout>
        {children}
      </AuthLayout>
    </AntdRegistry>
  );
};

export default layout;
