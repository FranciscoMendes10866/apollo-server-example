import { verify } from "argon2";

export const verifyPassword = async (hash, password) => {
  return await verify(hash, password);
};
