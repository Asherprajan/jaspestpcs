import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaspestpcs.com"),
  title: {
    default: "JAS Pest Control Service | Professional Pest Management Solutions",
    template: "%s | JAS Pest Control Service",
  },
  description: "Kerala's trusted pest control experts serving homes, businesses, & industries. ISO 9001:2015 certified. Comprehensive pest management solutions.",
  keywords: [
    "pest control", "pest management", "Kerala", "termite control", "rodent control", 
    "cockroach treatment", "bed bug treatment", "fumigation", "JAS Pest Control", 
    "commercial pest control", "residential pest control"
  ],
  authors: [{ name: "JAS Pest Control Service" }],
  creator: "JAS Pest Control Service",
  publisher: "JAS Pest Control Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "JAS Pest Control Service",
    description: "Kerala's trusted pest control experts serving homes, businesses, & industries. ISO 9001:2015 certified.",
    url: "https://jaspestpcs.com",
    siteName: "JAS Pest Control Service",
    images: [
      {
        url: "/images/og-image.jpg", // We will use a default image path here
        width: 1200,
        height: 630,
        alt: "JAS Pest Control Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAS Pest Control Service",
    description: "Kerala's trusted pest control experts serving homes, businesses, & industries. ISO 9001:2015 certified.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jaspestpcs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-foreground bg-background">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
