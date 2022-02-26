import { UserModel } from "../../../db/models/index.js";
import { signToken, verifyPassword } from "../../../utils/index.js";

export const login = async (parent, args, context) => {
  const { password, username } = args.input;

  const result = await UserModel.findOne({ where: { username } });

  const isValidPassword = await verifyPassword(result.password, password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  return {
    id: result.id,
    username: result.username,
    token: signToken({ userId: result.id }),
  };
};
