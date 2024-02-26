import { PdfEccSchemaType } from "../../types/yup";

export interface NewPdfCardInterface {
  saveRecord: (pdf: PdfEccSchemaType) => void;
}
