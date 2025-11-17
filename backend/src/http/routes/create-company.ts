
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcryptjs';

export async function createCompany(app: FastifyInstance) {
  app.post('/company', async (request, reply) => {

    const createCompanyBody = z.object({
      name: z.string().min(1),
      password: z.string().min(1),
    })
    
    const data = createCompanyBody.parse(request.body);
    const code = `${data.name.slice(0, 3).toUpperCase()}-${uuidv4().split('-')[0]}`;
    const salt = bcrypt.genSaltSync(10);

    const company = await prisma.company.create({
      data: {
        ...data,
        password: bcrypt.hashSync(data.password, salt),
        code
      }
    })

    return reply.status(201).send({ id: company.id })

  });
}