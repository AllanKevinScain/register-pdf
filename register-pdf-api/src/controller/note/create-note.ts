import { Response } from "express";
import { CreateNoteRequestInterface } from "../../types";
import { prismaClientdb } from "../../database";
import { noteSchema } from "../../schemas";

export class CreateNoteController {
  async handle(request: CreateNoteRequestInterface, response: Response) {
    const body = request.body;

    const parse = noteSchema.safeParse(body);

    if (parse.success) {
      const note = await prismaClientdb.note.create({ data: body });
      return response.json(note);
    }

    return response.status(502).send(parse.error);
  }
}
