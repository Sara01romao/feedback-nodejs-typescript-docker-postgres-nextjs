import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export async function getCompany(app: FastifyInstance) {
  app.get("/company", async (request, reply) => {
    const companys = await prisma.company.findMany();
    return reply.status(200).send(companys);
  })

  app.get("/company/:id", async (request, reply) => {
    const getCompanyParam = z.object({
      id: z.string().uuid(),
    })

    const {id} = getCompanyParam.parse(request.params);
    const company = await prisma.company.findUnique({
      where:{
        id:id,
      }
    })

    return reply.status(200).send(company);
  })
}