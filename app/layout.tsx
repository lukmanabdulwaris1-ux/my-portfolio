import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack Portfolio | Developer Showcase",
  description: "A polished portfolio showcasing full-stack applications, dashboards, and modern web development work.",
  openGraph: {
    title: "Full-Stack Portfolio | Developer Showcase",
    description: "A polished portfolio showcasing full-stack applications, dashboards, and modern web development work.",
    url: "https://your-domain.com",
    siteName: "Dev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Portfolio | Developer Showcase",
    description: "A polished portfolio showcasing full-stack applications, dashboards, and modern web development work.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics - loads only when NEXT_PUBLIC_GA_ID is set */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
            }}
          />
        ) : null}
      </body>
    </html>
  );
}
