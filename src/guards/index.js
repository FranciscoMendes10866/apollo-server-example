import { shield } from "graphql-shield";

import { isAuthorized } from './rules/index.js'

export const permissions = shield({
  Query: {},
  Mutation: {
    deleteDog: isAuthorized,
    addDog: isAuthorized,
    updateDog: isAuthorized,
  },
});
