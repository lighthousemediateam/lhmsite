import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen"; // ✅ import it

export const metadata: Metadata = {
  title: "LHM Creative",
  description: "Visual storytelling through film + photo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Include League Spartan font here or in globals.css */}
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#1a191b] text-[#cfb580] font-sans antialiased">
        <LoadingScreen /> {/* ✅ show loader before site content */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
