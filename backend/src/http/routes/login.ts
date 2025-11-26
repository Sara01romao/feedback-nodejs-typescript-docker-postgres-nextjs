import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function login(app: FastifyInstance) {
  app.post("/login", async (request, reply) => {

    const loginBody = z.object({
      code: z.string().min(1),
      password: z.string().min(1),
    });

    const { code, password } = loginBody.parse(request.body);
    const company = await prisma.company.findFirst({
      where: {
        code: code,
      }
    });

    if (!company) {
      return reply.status(404).send({ ok: false, error: 'Company Not found' });
    }

    if (!bcrypt.compareSync(password, company.password)) {
      return reply.status(404).send({ ok: false, error: 'Password  wrong' });
    }

    const payload = { id: company.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1h' });
    
    return reply.send({ token })
  })
}