import { makeExecutableSchema } from "@graphql-tools/schema";
import fastify from "fastify";
import dotenv from "dotenv";

import { typeDefs, resolvers } from "./graphql/index.js";
import { permissions } from "./guards/index.js";
import { createApolloServer } from "./apollo/index.js";
import { databaseConnection } from "./db/index.js";

  dotenv.config();
  export const startApolloServer = async () => {

  const app = fastify();

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = createApolloServer([permissions], { app, schema });
  await server.start();

  await databaseConnection.sync();

  app.register(server.createHandler());

  await app.listen(4000);
};
