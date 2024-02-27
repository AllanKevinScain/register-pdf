import { useEffect, useState } from "react";
import { PdfCard } from "../../components";
import { useNote } from "../../hooks";
import { PdfEccSchemaType } from "../../types";

export function ListPdfs() {
  const { getNotes } = useNote();
  const [pdfs, setPdfs] = useState<PdfEccSchemaType[]>([]);

  useEffect(() => {
    (async () => {
      const req: PdfEccSchemaType[] = await getNotes();

      setPdfs(req);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pdfs?.map((i) => {
    return <PdfCard key={`${i.herName}-${i.hisName}-${i.created_at}`} {...i} />;
  });
}
