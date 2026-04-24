import { MacroSezionePage, buildMacroSezioneMetadata } from "@/app/servizi/_components/macro-sezione-page";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMacroSezioneMetadata("professionista");

export default function ProfessionistaPage() {
  return <MacroSezionePage sectionSlug="professionista" />;
}
