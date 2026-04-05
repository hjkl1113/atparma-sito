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
    images: [
      {
        url: "/images/parma-duomo-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Duomo e Battistero di Parma - A.T. Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.T. Consulting Parma — Consulenza fiscale e finanziaria",
    description:
      "Studio commercialista a Parma. Consulenza fiscale, crisi di impresa, consulenza finanziaria.",
    images: ["/images/parma-duomo-aerial.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "A.T. Consulting Parma",
              legalName: "A.T. Consulting Parma S.R.L.S.",
              url: "https://www.atparma.com",
              telephone: "+390521247721",
              email: "segreteria@atparma.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Borgo Riccio da Parma 5",
                addressLocality: "Parma",
                postalCode: "43121",
                addressRegion: "PR",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.8015,
                longitude: 10.3279,
              },
              areaServed: [
                { "@type": "City", name: "Parma" },
                { "@type": "Country", name: "Italia" },
              ],
              description:
                "Studio commercialista a Parma. Consulenza fiscale, crisi di impresa e consulenza finanziaria per imprese e professionisti.",
              foundingDate: "2005",
              vatID: "02794450342",
              priceRange: "$$",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
