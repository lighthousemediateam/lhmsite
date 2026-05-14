import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Light House Media",
  description:
    "Dallas-based creative media agency specializing in cinematic video production, brand photography, UGC content, and event coverage across Dallas–Fort Worth and beyond.",
  url: "https://www.lhmcollective.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: [
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Fort Worth" },
    { "@type": "AdministrativeArea", name: "Dallas–Fort Worth Metroplex" },
    { "@type": "State", name: "Texas" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Media Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Production Dallas TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Photography Dallas TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UGC Content Creation Dallas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Videography Dallas TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Videography Dallas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Video Production" } },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lhmcollective.com"),
  title: {
    default: "Light House Media | Dallas Videographer & Photographer",
    template: "%s | Light House Media",
  },
  description:
    "Light House Media is a Dallas-based creative agency specializing in cinematic video production, brand photography, UGC content, and event coverage across Dallas–Fort Worth and beyond.",
  keywords: [
    "Dallas videographer",
    "Dallas photographer",
    "Dallas video production",
    "DFW videographer",
    "brand video Dallas",
    "commercial photographer Dallas TX",
    "event videographer Dallas",
    "UGC content creator Dallas",
    "Texas video production company",
    "social media video Dallas",
    "Light House Media",
    "LHM Creative",
    "Dallas brand photography",
    "corporate videographer Dallas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lhmcollective.com",
    siteName: "Light House Media",
    title: "Light House Media | Dallas Videographer & Photographer",
    description:
      "Cinematic video & brand photography in Dallas, TX. Trusted by REIGN, Virgin Hotels, Cuisinart, Arnold Sports & more.",
    images: [
      {
        url: "/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Light House Media — Dallas Video & Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Light House Media | Dallas Videographer & Photographer",
    description: "Cinematic video & brand photography in Dallas, TX.",
    images: ["/og-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.lhmcollective.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#1a191b] text-[#cfb580] font-sans antialiased">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
