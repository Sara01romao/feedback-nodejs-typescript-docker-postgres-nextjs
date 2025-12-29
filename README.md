<h2 align="center"> 💻 Caixa de Feedbacks </h2> 
<img width="1381" height="628" alt="image" src="https://github.com/user-attachments/assets/d796c42e-2e64-4e48-811c-744781eacdd7" />

<h2 align="center">  Dashboard </h2> 
<img width="1344" height="759" alt="image" src="https://github.com/user-attachments/assets/de5beb6f-61db-4e87-b37d-84f9e34be6e8" />

<h2 align="center"> Gerar código </h2> 
<img width="1121" height="592" alt="image" src="https://github.com/user-attachments/assets/4719ba0c-0205-4a0c-8a9c-ce2ddbc408b3" />



## 💻  Sobre o Projeto
Objetivo do projeto: permitir que empresas recebam sugestões, críticas e comentários de forma anônima, por meio de um código único compartilhado com os usuários.

## Etapas
- POST /company: cadastro de empresa
- POST /login : gerar token de acesso por 1h
- GET /feedbacks : lista feedbacks e filtra por data ou tipo
- POST /feedback: envio de feedback vinculado a uma empresa

<br>

## :rocket: Tecnologias Usadas

Back-End 
```
Node.js
Fastify
docker
PostgreSQL
Prisma
RestFox
JWT
```
Configurar variáveis de ambiente .env
```
DATABASE_URL
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB
```

Front-End 
```
Nextjs
Tailwind
Figma  
```
## Getting Started

First, run the development server:

```bash
pnpm install
```
