import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "My Home",
  description: "My Home",
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
