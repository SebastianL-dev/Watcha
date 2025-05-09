import type { Metadata } from "next";
import { lato } from "@/styles/fonts";
import Header from "@/components/layout/header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Watcha",
  description: "Find any of your favorite movies and series.",
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
      </body>
    </html>
  );
}
