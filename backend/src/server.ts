import fastify from "fastify";
import { createCompany } from "./http/routes/create-company.js";
import { getCompany } from "./http/routes/get-company.js";
import { postFeedback } from "./http/routes/feedback-create.js";
import { getFeedback } from "./http/routes/get-feedback.js";
import { login } from "./http/routes/login.js";

const app = fastify();

app.register(createCompany);
app.register(getCompany);
app.register(postFeedback);
app.register(getFeedback);
app.register(login);

app.listen({ port: 8080 }).then(() => {
    console.log('Server is running ');
})