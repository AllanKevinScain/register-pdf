import { PdfEccSchemaType } from "../../types";

export interface NewPdfCardInterface {
  saveRecord: (pdf: PdfEccSchemaType) => void;
}
