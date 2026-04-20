export async function generaGuidaPDF(config: {
  titolo: string;
  intro: string;
  sezioni: { titolo: string; voci: string[] }[];
  avvertenza: string;
  fileName: string;
}): Promise<void> {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 20;
  const marginRight = 20;
  const marginTop = 20;
  const marginBottom = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const accent: [number, number, number] = [74, 159, 216];
  const zincDark: [number, number, number] = [24, 24, 27];
  const zincMid: [number, number, number] = [82, 82, 91];

  let y = marginTop;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(zincDark[0], zincDark[1], zincDark[2]);
  doc.text("A.T. Consulting Parma S.R.L.S.", marginLeft, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(accent[0], accent[1], accent[2]);
  doc.text("GUIDA GRATUITA", pageWidth - marginRight, y, { align: "right" });
  y += 8;

  doc.setDrawColor(228, 228, 231);
  doc.setLineWidth(0.3);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(zincDark[0], zincDark[1], zincDark[2]);
  const titoloLines = doc.splitTextToSize(config.titolo, contentWidth);
  doc.text(titoloLines, marginLeft, y);
  y += titoloLines.length * 7 + 3;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(zincMid[0], zincMid[1], zincMid[2]);
  const introLines = doc.splitTextToSize(config.intro, contentWidth);
  doc.text(introLines, marginLeft, y);
  y += introLines.length * 5 + 6;

  for (let si = 0; si < config.sezioni.length; si++) {
    const sez = config.sezioni[si];
    ensureSpace(14);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(zincDark[0], zincDark[1], zincDark[2]);
    const sezioneLines = doc.splitTextToSize(sez.titolo, contentWidth);
    doc.text(sezioneLines, marginLeft, y);
    y += sezioneLines.length * 5 + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(zincMid[0], zincMid[1], zincMid[2]);

    for (let vi = 0; vi < sez.voci.length; vi++) {
      const voce = sez.voci[vi];
      const voceLines = doc.splitTextToSize(voce, contentWidth - 8);
      const altezzaBlocco = voceLines.length * 5 + 2;
      ensureSpace(altezzaBlocco);

      const checkBox = new (doc as unknown as {
        AcroForm: { CheckBox: new () => Record<string, unknown> & { Rect: number[]; fieldName: string; appearanceState: string } };
      }).AcroForm.CheckBox();
      checkBox.Rect = [marginLeft, y - 3.2, 4, 4];
      checkBox.fieldName = `c_${si}_${vi}`;
      checkBox.appearanceState = "Off";
      (doc as unknown as { addField: (f: unknown) => void }).addField(checkBox);

      doc.text(voceLines, marginLeft + 6, y);
      y += altezzaBlocco;
    }
    y += 4;
  }

  ensureSpace(20);
  y += 4;
  doc.setDrawColor(228, 228, 231);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 5;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(zincMid[0], zincMid[1], zincMid[2]);
  const avvLines = doc.splitTextToSize(config.avvertenza, contentWidth);
  doc.text(avvLines, marginLeft, y);
  y += avvLines.length * 4 + 3;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(
    "A.T. Consulting Parma S.R.L.S. — Borgo Riccio da Parma 5, 43121 Parma (PR) — P.IVA 02794450342 — www.atparma.com",
    marginLeft,
    y
  );

  doc.save(config.fileName);
}
