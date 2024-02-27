import * as Yup from "yup";
import { PdfEccSchema } from "../../schemas";

export type PdfEccSchemaType = Yup.InferType<typeof PdfEccSchema> & {
  created_at?: Date;
  id?: string;
};
