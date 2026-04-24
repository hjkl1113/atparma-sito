import { MacroSezionePage, buildMacroSezioneMetadata } from "@/app/servizi/_components/macro-sezione-page";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMacroSezioneMetadata("dichiarazioni");

export default function DichiarazioniPage() {
  return <MacroSezionePage sectionSlug="dichiarazioni" />;
}
