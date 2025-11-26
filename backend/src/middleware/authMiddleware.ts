import { FastifyReply, FastifyRequest } from "fastify";
import  jwt  from "jsonwebtoken";

interface JwtPayload {
  sub: string;
  id: string;
  role?: string;
  iat?: number;
  exp?: number;
}

declare module 'fastify' {
  interface FastifyRequest {
    user: JwtPayload;
  }
}

async function authMiddleware(request:FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.code(401).send({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "supersecret") as JwtPayload;
    request.user = payload;

  } catch (error) {
    return reply.code(401).send({ message: "Token inválido" });
  }
}

export default authMiddleware;
