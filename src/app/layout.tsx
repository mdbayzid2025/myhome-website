import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ConfigProvider } from "antd";
import './globals.css';
import { mainTheme } from "./theme";

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
            <Navbar />
            <Toaster position="top-right" duration={1500} />
            {children}
            <Footer />          
        </ConfigProvider>
      </body>
    </html>
  );
}
