import { hash } from "argon2";

export const hashPassword = async (password) => {
  return await hash(password);
};
