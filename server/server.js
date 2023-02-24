const fastify = require('fastify');
const dotenv = require('dotenv');

dotenv.config();


const app = fastify()

app.listen({port: process.env.PORT})