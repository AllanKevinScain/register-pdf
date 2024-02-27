import { FormikValues, FormikHelpers } from "formik";
import { PdfEccSchemaType } from "../../types";

export interface PdfCardInterface
  extends FormikValues,
    FormikHelpers<PdfEccSchemaType> {
  allDisabled?: boolean;
  hasSaveButton?: boolean;
  hasEditButton?: boolean;
}
