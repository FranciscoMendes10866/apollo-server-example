import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { applyMiddleware } from "graphql-middleware";

export const createApolloServer = (midlewares, { app, schema }) => {
  const schemaWithPermissions = applyMiddleware(schema, ...midlewares);

  return new ApolloServer({
    schema: schemaWithPermissions,
    context: ({ request, reply }) => ({
      request,
      reply,
    }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
      {
        serverWillStart: async () => {
          return {
            drainServer: async () => {
              await app.close();
            },
          };
        },
      },
    ],
  });
};
