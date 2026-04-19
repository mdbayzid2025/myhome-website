import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { headers } from "next/headers";
import { getSearchParams } from "@/lib/getSearchParams";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Home",
  description: "My Home",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const searchParams = await getSearchParams();
  console.log("searchParams:", searchParams);
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased poppins`}>
        <AntdRegistry>
          <Toaster position="top-right" duration={1500} />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
