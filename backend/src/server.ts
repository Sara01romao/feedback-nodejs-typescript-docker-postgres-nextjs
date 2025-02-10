import fastify from "fastify";

const app = fastify();

app.get('/', async function handler (request, reply) {
    return { hello: 'world' }
  })

app.listen({port:8080}).then(()=>{
    console.log('Server is running ');
})