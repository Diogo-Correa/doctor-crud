import { FastifyInstance } from "fastify";
import { doctorsRoutes } from "../modules/doctors/doctors.routes";
import { doctorSchemas } from '../modules/doctors/doctors.schema'
import { specialtyRoutes } from "../modules/specialties/specialties.routes";
import { name, version, author, description } from "../../package.json";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { SwaggerTheme } from "swagger-themes";
import { specialtySchemas } from "../modules/specialties/specialties.schema";
import { phonesSchemas } from "../modules/phones/phones.schema";
import { phonesRoutes } from "../modules/phones/phones.routes";

export async function appRoutes(app: FastifyInstance) {
    app.register(swagger, {
        openapi: {
            info: {
                title: "7Consulting API Documentation",
                description: "",
                version,
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
        },
    });
    app.register(swaggerUI, {
        routePrefix: "/",
        staticCSP: false,
        uiConfig: {
            filter: true,
        },
        theme: {
            title: "7Consulting Documentation",
            css: [
                {
                    filename: "theme.css",
                    content: new SwaggerTheme("v3").getBuffer("dark"),
                },
            ],
        },
    });

    for (const schema of [
        ...doctorSchemas,
        ...specialtySchemas,
        ...phonesSchemas
    ])
        app.addSchema(schema);

    app.register(doctorsRoutes, { prefix: '/doctors' });
    app.register(phonesRoutes, { prefix: '/doctors' });
    app.register(specialtyRoutes, { prefix: '/specialties' });
}