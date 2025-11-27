import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import z from "zod";

export async function getFeedback(app: FastifyInstance) {
  app.get('/feedbacks', { preHandler: authMiddleware }, async (request, reply) => {

    const filterBody = z.object({
      type: z.enum(['sugestao', 'critica', 'comentario']).optional(),
      order: z.enum(['desc', 'asc']).optional(),
      date: z.coerce.date().optional()
    });
    const filter = filterBody.parse(request.query);
    const feedbacks = await prisma.feedback.findMany({
      where: {
        companyId: request.user.id,
        ...(filter.type && { type: filter.type }),
        ...(filter.date && {
          createdAt: {
            gte: new Date(filter.date.toISOString().split('T')[0] + "T00:00:00.000Z"),
            lt: new Date(filter.date.toISOString().split('T')[0] + "T23:59:59.999Z")
          }
        })
      },
      orderBy: {
        createdAt: filter.order ?? "desc",
      }
    });

    return reply.send({ codeCompany: request.user.code, feedbacks: feedbacks});
  });
}