import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";


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


  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased poppins`}>        
          <Toaster position="top-right" duration={1500} />
          {children}        
      </body>
    </html>
  );
}
