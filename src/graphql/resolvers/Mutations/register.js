import { UserModel } from "../../../db/models/index.js";
import { signToken, hashPassword } from "../../../utils/index.js";

export const register = async (parent, args, context) => {
  const { password, ...rest } = args.input;

  const hashedPassword = await hashPassword(password);

  const result = await UserModel.create({ ...rest, password: hashedPassword });

  return {
    id: result.id,
    username: result.username,
    password: result.password,
    token: signToken({ userId: result.id }),
  };
};
