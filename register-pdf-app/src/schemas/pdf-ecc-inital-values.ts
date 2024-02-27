import * as Yup from "yup";
import { isValidMobilePhone } from "@brazilian-utils/brazilian-utils";

export const validatePhoneNumber: Yup.TestFunction = (
  value,
  { createError, path }
) => {
  const parsedValue = String(value);
  if (isValidMobilePhone(parsedValue)) {
    return true;
  }

  return createError({
    path,
    message: "Informe um celular válido.",
  });
};

export const PdfEccSchema = Yup.object().shape({
  archdiocese: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  city: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  parish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisName: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisNickname: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisBirthdate: Yup.string().required("Campo obrigatório!"),
  hisProfission: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisReligion: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herName: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herNickname: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herBirthdate: Yup.string().required("Campo obrigatório!"),
  herProfission: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herReligion: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  marriageReligious: Yup.bool(),
  whichParish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  address: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  district: Yup.string().required("Campo obrigatório!"),
  cep: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  cityState: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  parishAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  addressNumber: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  apartmentNumber: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  phoneNumber: Yup.string()
    .test({ name: "phoneNumber", test: validatePhoneNumber })
    .required("Campo obrigatório!"),
  hisProfessionalAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisProfessionalPhoneNumber: Yup.string()
    .test({ name: "phoneNumber", test: validatePhoneNumber })
    .required("Campo obrigatório!"),
  dateWedding: Yup.string().required("Campo obrigatório!"),
  herProfessionalAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herProfessionalPhoneNumber: Yup.string()
    .test({ name: "phoneNumber", test: validatePhoneNumber })
    .required("Campo obrigatório!"),
  numberOfChildren: Yup.string().max(2).required("Campo obrigatório!"),
  numberFirstStep: Yup.string().max(4).required("Campo obrigatório!"),
  dateFirstStep: Yup.string().required("Campo obrigatório!"),
  localFirstStep: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  activitiesFirstStage: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  numberSecondStep: Yup.string().max(4).required("Campo obrigatório!"),
  dateSecondStep: Yup.string().required("Campo obrigatório!"),
  localSecondStep: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  activitiesSecondStage: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  numberThirdStep: Yup.string().max(4).required("Campo obrigatório!"),
  dateThirdStep: Yup.string().required("Campo obrigatório!"),
  localThirdStep: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  activitiesThirdStage: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  engagementParish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  habilities: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
});
