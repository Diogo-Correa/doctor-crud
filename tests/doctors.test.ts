import { fastify } from "fastify";
import { appRoutes } from "../src/libs/routes";

describe('doctors routes', () => {
    const app = fastify();
    app.register(appRoutes);

    it('list all doctors from db.', async () => {
        const response = await app.inject({ method: 'GET', url: '/doctors' });

        expect(response.statusCode).toBe(200);
    });

    it('trying delete doctors with a unexists id.', async () => {
        const response = await app.inject({ method: 'DELETE', url: '/doctors/1' });

        expect(response.statusCode).toBe(500);
    })

    it('trying search doctors', async () => {
        const response = await app.inject({ method: 'GET', url: '/doctors/search/teste' });

        expect(response.statusCode).toBe(200);
    })
});