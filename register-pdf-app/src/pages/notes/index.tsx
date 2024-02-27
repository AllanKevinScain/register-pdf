import { NewPdfCard } from "../../components";
import { useHref, useNote } from "../../hooks";
import { PdfEccSchemaType } from "../../types";
import { ListPdfs } from "./list-pdfs";

export function Notes() {
  const { href } = useHref();
  const { createNote } = useNote();

  async function saveRecord(pdf: PdfEccSchemaType) {
    await createNote(pdf);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-3 md:px-0">
      <h1 className="text-3xl text-primary-700">
        {href?.toLocaleUpperCase()} NOTES
      </h1>
      <NewPdfCard saveRecord={saveRecord} />
      <div className="h-px bg-primary-700" />
      <ListPdfs />
    </div>
  );
}
