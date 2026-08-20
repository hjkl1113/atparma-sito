const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

/** "2026-08-19" -> "19 agosto 2026" */
export function formatDataEstesa(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${parseInt(d, 10)} ${MESI[parseInt(m, 10) - 1] ?? m} ${y}`;
}
