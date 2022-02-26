import { rule } from "graphql-shield";

import { verifyToken } from "../../utils/index.js";

export const isAuthorized = rule()(async (parent, args, ctx, info) => {
  const { authorization } = ctx.request.headers;
  if (!authorization) {
    return false;
  }

  const token = authorization.replace("Bearer", "").trim();

  const { userId } = verifyToken(token);
  
  return !!userId;
});
