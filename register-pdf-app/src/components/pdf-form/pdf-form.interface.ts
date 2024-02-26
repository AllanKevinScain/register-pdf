import { FormikValues } from "formik";

export interface PdfCardInterface extends FormikValues {
  allDisabled?: boolean;
  hasSaveButton?: boolean;
  hasEditButton?: boolean;
}
