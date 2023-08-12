import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './libs/routes';

const app = fastify();


app.register(cors);
app.register(appRoutes);

app
    .listen({
        port: 4000
    })
    .then(() => {
        console.log('Server is running!');
    });