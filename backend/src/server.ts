import fastify from "fastify";
import { createCompany } from "./http/routes/post-company.js";
import { postFeedback } from "./http/routes/post-feedback.js";
import { getFeedback } from "./http/routes/get-feedback.js";
import { login } from "./http/routes/login.js";

const app = fastify();

app.register(createCompany);
app.register(postFeedback);
app.register(getFeedback);
app.register(login);

app.listen({ port: 8080 }).then(() => {
    console.log('Server is running ');
})