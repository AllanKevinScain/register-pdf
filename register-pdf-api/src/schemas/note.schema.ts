import { z } from "zod";

export const noteSchema = z.object({
  archdiocese: z.string().max(200),
  city: z.string().max(200),
  parish: z.string().max(200),
  hisName: z.string().max(200),
  hisNickname: z.string().max(200),
  hisBirthdate: z.string().max(200),
  hisProfission: z.string().max(200),
  hisReligion: z.string().max(200),
  herName: z.string().max(200),
  herNickname: z.string().max(200),
  herBirthdate: z.string().max(200),
  herProfission: z.string().max(200),
  herReligion: z.string().max(200),
  marriageReligious: z.boolean(),
  whichParish: z.string().max(200),
  address: z.string().max(200),
  district: z.string().max(200),
  cep: z.string().max(200),
  cityState: z.string().max(200),
  parishAddress: z.string().max(200),
  addressNumber: z.string().max(200),
  apartmentNumber: z.string().max(200),
  phoneNumber: z.string().max(200),
  hisProfessionalAddress: z.string().max(200),
  hisProfessionalPhoneNumber: z.string().max(200),
  dateWedding: z.string().max(200),
  herProfessionalAddress: z.string().max(200),
  herProfessionalPhoneNumber: z.string().max(200),
  numberOfChildren: z.string().max(200),
  numberFirstStep: z.string().max(200),
  dateFirstStep: z.string().max(200),
  localFirstStep: z.string().max(200),
  activitiesFirstStage: z.string().max(200),
  numberSecondStep: z.string().max(200),
  dateSecondStep: z.string().max(200),
  localSecondStep: z.string().max(200),
  activitiesSecondStage: z.string().max(200),
  numberThirdStep: z.string().max(200),
  dateThirdStep: z.string().max(200),
  localThirdStep: z.string().max(200),
  activitiesThirdStage: z.string().max(200),
  engagementParish: z.string().max(200),
  habilities: z.string().max(200),
});

export const idNoteSchema = z.object({
  id: z.string().regex(/^[\da-f]{8}-([\da-f]{4}-){3}[\da-f]{12}$/i),
});

export const pastoralSchema = z.object({
  name: z.string().max(200),
});

export const idPastoralSchema = z.object({
  id: z.string().regex(/^[\da-f]{8}-([\da-f]{4}-){3}[\da-f]{12}$/i),
});
