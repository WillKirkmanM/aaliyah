import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { PlayerProvider } from "@/hooks/usePlayer";
import { NavbarProvider } from "@/components/Layout/NavbarContext";
import ScrollBar from "@/components/Page/ScrollBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AALIYAH | The Red Album",
  description: "Aaliyah’s Self-Titled Album provides a definition of the ideal, preserving traditionalist values through the rejection of short-term gratification for long-term tending. Her extension of contemporary standards with regards to her Music, provide an outlook to her maturation as a person, leaving an Everlasting Legacy.",
  openGraph: {
    title: "AALIYAH | The Red Album",
    description: "Aaliyah’s Self-Titled Album provides a definition of the ideal, preserving traditionalist values through the rejection of short-term gratification for long-term tending. Her extension of contemporary standards with regards to her Music, provide an outlook to her maturation as a person, leaving an Everlasting Legacy.",
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'AALIYAH | The Red Album',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AALIYAH | The Red Album",
    description: "Released in 2001, Aaliyah’s Self-Titled Album provides a definition of the ideal, preserving traditionalist values through the rejection of short-term gratification for long-term tending. Her extension of contemporary standards with regards to her Music, provide an outlook to her maturation as a person, leaving an Everlasting Legacy.",
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarProvider>
          <PlayerProvider>
            <Navbar />
            <ScrollBar>
              {children}
            </ScrollBar>
          </PlayerProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
