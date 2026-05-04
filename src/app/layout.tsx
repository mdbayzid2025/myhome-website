import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import './globals.css';
import AntdProvider from "./AntdProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <Toaster position="top-right" duration={1500} />
        <AntdRegistry>
          <AntdProvider>
            <Navbar />
            {children}
            <Footer />
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}