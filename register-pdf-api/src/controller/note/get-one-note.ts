import { Response } from "express";
import { prismaClientdb } from "../../database";
import { GetOneNoteRequestInterface } from "../../types";
import { idNoteSchema } from "../../schemas";

export class GetOneNoteController {
  async handle(request: GetOneNoteRequestInterface, response: Response) {
    const { query } = request;

    const parseId = idNoteSchema.safeParse(query);

    if (parseId.success) {
      const { id } = query;
      const getOneNote = await prismaClientdb.note.findUnique({
        where: { id },
      });

      return response.json(getOneNote);
    }

    return response.status(502).send(parseId.error);
  }
}
