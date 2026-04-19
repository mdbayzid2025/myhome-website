import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import './globals.css'
import { ConfigProvider } from "antd";
import { mainTheme } from "./theme";
import { headers } from "next/headers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Home",
  description: "My Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased poppins`}>
        <ConfigProvider theme={mainTheme}>
          <AntdRegistry>
            <Navbar />
            <Toaster position="top-right" duration={1500} />
            {children}
            <Footer />
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
