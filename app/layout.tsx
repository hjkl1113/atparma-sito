import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A.T. Consulting Parma — Consulenza fiscale e finanziaria per imprese",
  description:
    "Studio commercialista a Parma. Consulenza fiscale, crisi di impresa e consulenza finanziaria per imprese e professionisti. Dal 2005, da Parma a tutta Italia.",
  keywords: [
    "commercialista Parma",
    "consulenza fiscale",
    "crisi di impresa",
    "consulenza finanziaria",
    "studio commercialista",
    "A.T. Consulting Parma",
  ],
  openGraph: {
    title: "A.T. Consulting Parma — Consulenza fiscale e finanziaria",
    description:
      "Supportiamo imprese e professionisti nella gestione fiscale, nella crisi di impresa e nelle operazioni straordinarie.",
    url: "https://www.atparma.com",
    siteName: "A.T. Consulting Parma",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
