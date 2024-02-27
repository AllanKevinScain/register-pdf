import { Response } from "express";
import { prismaClientdb } from "../../database";
import { DeleteNoteRequestInterface } from "../../types";
import { idPastoralSchema } from "../../schemas";

export class DeletePastoralController {
  async handle(request: DeleteNoteRequestInterface, response: Response) {
    const { query } = request;

    const parseId = idPastoralSchema.safeParse(query);

    if (parseId.success) {
      const { id } = query;
      const deletePastoral = await prismaClientdb.pastoral.delete({
        where: { id },
      });

      return response.json(deletePastoral);
    }

    return response.status(502).send(parseId.error);
  }
}
