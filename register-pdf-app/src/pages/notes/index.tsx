import { useState } from "react";
import { NewPdfCard, PdfCard } from "../../components";
import { useHref } from "../../hooks";
import { PdfEccSchemaType } from "../../types/yup";

export function Notes() {
  const { href } = useHref();
  const [pdfs, setPdfs] = useState<PdfEccSchemaType[]>([]);

  function saveRecord(pdf: PdfEccSchemaType) {
    const aux: PdfEccSchemaType = { ...pdf, createDate: new Date() };

    setPdfs((s) => [...s, aux]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-3 md:px-0">
      <h1 className="text-3xl text-primary-700">
        {href?.toLocaleUpperCase()} NOTES
      </h1>
      <NewPdfCard saveRecord={saveRecord} />
      <div className="h-px bg-primary-700" />
      {pdfs.map((i) => {
        return (
          <PdfCard key={`${i.herName}-${i.hisName}-${i.createDate}`} {...i} />
        );
      })}
    </div>
  );
}
