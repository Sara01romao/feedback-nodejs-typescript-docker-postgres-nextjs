import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export async function postFeedback(app: FastifyInstance) {
  app.post('/feedback', async (request, reply) => {
    const feedbackBody = z.object({
      companyCode: z.string().min(1),
      type: z.enum(['sugestao', 'critica', 'comentario']),
      description: z.string().min(1),
    });

    const data = feedbackBody.parse(request.body);
    const company = await prisma.company.findUnique({
      where: {
        code: data.companyCode,
      }
    });

    if (!company) {
      return reply.status(404).send({ message: "Not found" });
    }

    const feedback = await prisma.feedback.create({
      data: {
        companyId: company.id,
        type: data.type,
        description: data.description

      }
    });

    return reply.status(201).send({ message: "ok"});
  })

}