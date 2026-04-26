import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorizza il route handler /og?slug=... come sorgente per next/image
  // (OG images dinamiche generate da app/og/route.tsx). Senza questo, le
  // pagine che usano <Image src="/og?slug=..."> falliscono il prerender
  // perché Next blocca per default i query string non whitelisted.
  images: {
    localPatterns: [
      { pathname: "/og", search: "" },
      { pathname: "/og", search: "?**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/servizi/artigiano-commerciante",
        destination: "/servizi/artigiani-commercianti",
        permanent: true,
      },
      // Prodotti archiviati 2026-04-21: ora coperti dal bundle Professionista
      {
        source: "/servizi/piva-forfettario",
        destination: "/servizi/piva-professionista",
        permanent: true,
      },
      {
        source: "/servizi/piva-forfettario-efat",
        destination: "/servizi/piva-professionista",
        permanent: true,
      },
      {
        source: "/servizi/piva-forfettario/checkout",
        destination: "/servizi/piva-professionista",
        permanent: true,
      },
      {
        source: "/servizi/piva-forfettario-efat/checkout",
        destination: "/servizi/piva-professionista",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
