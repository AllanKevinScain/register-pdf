import { Request, Response } from "express";
import { prismaClientdb } from "../../database";
import { pastoralSchema } from "../../schemas";

export class CreatePastoralController {
  async handle(
    request: Request<any, any, { name: string }>,
    response: Response
  ) {
    const body = request.body;
    const parse = pastoralSchema.safeParse(body);

    if (parse.success) {
      const pastoral = await prismaClientdb.pastoral.create({ data: body });
      return response.json(pastoral);
    }

    return response.status(502).send(parse.error);
  }
}
