import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
