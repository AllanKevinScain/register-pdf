import { Response } from "express";
import { prismaClientdb } from "../../database";
import { DeleteNoteRequestInterface } from "../../types";
import { idNoteSchema } from "../../schemas";

export class DeleteNoteController {
  async handle(request: DeleteNoteRequestInterface, response: Response) {
    const { query } = request;

    const parseId = idNoteSchema.safeParse(query);

    if (parseId.success) {
      const { id } = query;
      const deleteNote = await prismaClientdb.note.delete({ where: { id } });

      return response.json(deleteNote);
    }

    return response.status(502).send(parseId.error);
  }
}
