import { ImageResponse } from "next/og";
import { ogThemes } from "@/lib/og-theme";

export const runtime = "edge";

/**
 * GET /og?slug=<slug>
 *
 * Genera al volo un'immagine OG (1200x630) per articoli blog e landing
 * servizi. Palette unificata navy → blue: differenziazione affidata al
 * titolo, non al colore. Resta leggibile anche a thumbnail (280px) per
 * uso come hero card in /blog e home.
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
          // Padding generoso (120px) per compensare il crop laterale che
          // subisce l'OG quando viene mostrata in card 280x176 (aspect 1.6)
          // con object-cover invece dell'aspect 1200/630 nativo (1.9).
          padding: "100px 120px 90px",
          backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Brand AT in alto a sinistra */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            AT
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              opacity: 0.95,
            }}
          >
            A.T. Consulting Parma
          </div>
        </div>

        {/* Eyebrow + titolo enorme */}
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              fontSize: "30px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              opacity: 0.7,
              fontWeight: 600,
            }}
          >
            {theme.eyebrow}
          </div>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: "960px",
            }}
          >
            {theme.titolo}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        // 5 min browser, 1 day stale-while-revalidate sul CDN: cambi al
        // template OG diventano visibili rapidamente senza richiedere
        // hard refresh agli utenti che hanno cachato la vecchia versione.
        "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
      },
    },
  );
}
