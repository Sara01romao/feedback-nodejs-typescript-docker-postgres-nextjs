import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import z from "zod";

export async function getFeedback(app: FastifyInstance) {

  app.get('/feedbacks', { preHandler: authMiddleware }, async (request, reply) => {

    console.log(request.user.id)

    const feedbacks = await prisma.feedback.findMany({
      where: {
        companyId: request.user.id,
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    console.log(feedbacks)

    return reply.send({ feedbacks: feedbacks });
  });

  app.get('/feedbacks/filter', { preHandler: authMiddleware }, async (request, reply) => {

    const filterBody = z.object({
       type: z.enum(['sugestao', 'critica', 'comentario']),
       order:z.enum(['desc', 'asc'])
    })
   
    const data = filterBody.parse(request.query);
    const feedbacks = await prisma.feedback.findMany({
      where: {
        companyId: request.user.id,
        type: data.type
      },
      orderBy: {
        createdAt: data.order ?? 'desc'
      }
    });

    console.log(feedbacks)

    return reply.send({ feedbacks: feedbacks });
  })


}