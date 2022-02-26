import * as Queries from "./Queries/index.js";
import * as Mutations from "./Mutations/index.js";

export const resolvers = {
  Query: {
    ...Queries,
  },
  Mutation: {
    ...Mutations,
  },
};
