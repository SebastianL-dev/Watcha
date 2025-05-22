import type { Metadata } from "next";
import { lato } from "@/styles/fonts";
import Header from "@/components/layout/header";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Watcha | Home",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
