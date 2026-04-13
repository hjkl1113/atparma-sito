import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://www.atparma.com"),
  title: "A.T. Consulting Parma — Commercialista online, consulenza fiscale e finanziaria",
  description:
    "Studio commercialista a Parma. Commercialista online per 730, Partita IVA, consulenza fiscale, crisi di impresa e consulenza finanziaria. Dal 2005, da Parma a tutta Italia.",
  keywords: [
    "commercialista Parma",
    "commercialista online",
    "commercialista online Parma",
    "consulenza fiscale Parma",
    "730 online",
    "apertura Partita IVA online",
    "crisi di impresa Parma",
    "consulenza finanziaria Parma",
    "studio commercialista Parma",
    "A.T. Consulting Parma",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "tnet8EIZX4RXI4SWgdLc6OGSOQOV-0UrOgADZNYOYgg",
  },
  openGraph: {
    title: "A.T. Consulting Parma — Commercialista online, consulenza fiscale e finanziaria",
    description:
      "Studio commercialista a Parma. 730 online, apertura Partita IVA, consulenza fiscale e finanziaria per imprese e professionisti. Dal 2005, da Parma a tutta Italia.",
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
    title: "A.T. Consulting Parma — Commercialista online, consulenza fiscale e finanziaria",
    description:
      "Studio commercialista a Parma. 730 online, Partita IVA, consulenza fiscale, crisi di impresa.",
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
              image: "https://www.atparma.com/images/parma-duomo-aerial.jpg",
              logo: "https://www.atparma.com/images/parma-duomo-aerial.jpg",
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
                { "@type": "Province", name: "Provincia di Parma" },
                { "@type": "State", name: "Emilia-Romagna" },
                { "@type": "Country", name: "Italia" },
              ],
              description:
                "Studio commercialista a Parma. Commercialista online per 730, Partita IVA, consulenza fiscale, crisi di impresa e consulenza finanziaria per imprese e professionisti.",
              foundingDate: "2005",
              vatID: "02794450342",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://clienti.atparma.com",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi professionali",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dichiarazione 730 online",
                      description: "Compilazione, verifica detrazioni e invio telematico del modello 730",
                      url: "https://www.atparma.com/blog/come-fare-730-online",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Apertura Partita IVA online",
                      description: "Apertura Partita IVA, scelta regime fiscale e codice ATECO",
                      url: "https://www.atparma.com/blog/aprire-partita-iva-online",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consulenza fiscale",
                      description: "Pianificazione fiscale, dichiarazioni, contenziosi tributari",
                      url: "https://www.atparma.com/servizi/consulenza-fiscale",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Crisi di impresa",
                      description: "Composizione negoziata, piani di risanamento, concordato preventivo",
                      url: "https://www.atparma.com/servizi/crisi-di-impresa",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consulenza finanziaria",
                      description: "Business plan, valutazione d'azienda, finanza agevolata, M&A",
                      url: "https://www.atparma.com/servizi/consulenza-finanziaria",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
