import fastify from "fastify";
import { createCompany } from "./http/routes/create-company.js";
import { getCompany } from "./http/routes/get-company.js";


const app = fastify();


app.register(createCompany);
app.register(getCompany);

app.get("/", (request, reply)=>{
    reply.send({msg:"hello"})

})


app.listen({port:8080}).then(()=>{
    console.log('Server is running ');
})