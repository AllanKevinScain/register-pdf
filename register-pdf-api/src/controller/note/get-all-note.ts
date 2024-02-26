import { Response, Request } from "express";
import { prismaClientdb } from "../../database";

export class GetAllNoteController {
  async handle(_: Request, response: Response) {
    const allNotes = await prismaClientdb.note.findMany();

    return response.json(allNotes);
  }
}
