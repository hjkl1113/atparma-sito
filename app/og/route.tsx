import { ImageResponse } from "next/og";
import { ogThemes } from "@/lib/og-theme";

export const runtime = "edge";

/**
 * GET /og?slug=<slug>
 *
 * Genera al volo un'immagine OG (1200x630) per gli articoli blog e per le
 * landing servizi creati 25-26 aprile. Ogni slug ha un tema (titolo + eyebrow
 * + gradiente) definito in lib/og-theme.ts. Slug non mappato => fallback
 * theme `default`.
 *
 * URL usato come:
 *   - openGraph.images[].url (URL assoluto in metadata)
 *   - <Image src=...> hero in pagina (path relativo + unoptimized)
 *   - lib/articoli.ts immagine listing (path relativo)
 *
 * Cache lato Vercel: payload statico per slug, header immutable + lunga.
 */
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") ?? "";
  const theme = ogThemes[slug] ?? ogThemes.default;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundImage: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Eyebrow + titolo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.85,
              fontWeight: 500,
            }}
          >
            {theme.eyebrow}
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            {theme.titolo}
          </div>
        </div>

        {/* Footer brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.25)",
            paddingTop: "28px",
            fontSize: "26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              AT
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 600 }}>A.T. Consulting Parma</div>
              <div style={{ fontSize: "18px", opacity: 0.8 }}>
                Dottori Commercialisti iscritti all&apos;Albo
              </div>
            </div>
          </div>
          <div style={{ fontSize: "20px", opacity: 0.85 }}>atparma.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
