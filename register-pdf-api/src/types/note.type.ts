import { Request } from "express";
import { noteSchema } from "../schemas";
import { z } from "zod";

type NoteType = z.infer<typeof noteSchema> & {
  id: string;
};

type CutIdNoteType = Pick<NoteType, "id">;

export type CreateNoteRequestInterface = Request<unknown, unknown, NoteType>;
export type EditNoteRequestInterface = Request<
  unknown,
  unknown,
  NoteType,
  CutIdNoteType
>;
export type DeleteNoteRequestInterface = Request<
  unknown,
  unknown,
  unknown,
  CutIdNoteType
>;
export type GetOneNoteRequestInterface = Request<
  unknown,
  unknown,
  unknown,
  CutIdNoteType
>;
