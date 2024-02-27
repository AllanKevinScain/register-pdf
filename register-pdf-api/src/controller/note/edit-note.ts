import { Response } from "express";
import { prismaClientdb } from "../../database";
import { EditNoteRequestInterface } from "../../types";
import { idNoteSchema, noteSchema } from "../../schemas";

export class EditNoteController {
  async handle(request: EditNoteRequestInterface, response: Response) {
    const { body, query } = request;
    const { id } = query;

    const parseId = idNoteSchema.safeParse(query);
    if (parseId.success) {
      const parse = noteSchema.safeParse(body);

      if (parse.success) {
        const updateNote = await prismaClientdb.note.update({
          where: {
            id,
          },
          data: body,
        });

        return response.json(updateNote);
      }

      return response.status(502).send(parse.error);
    }

    return response.status(502).send(parseId.error);
  }
}
