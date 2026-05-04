import type { Metadata } from "next";


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
    <div>
      {children}
    </div>
  );
}
