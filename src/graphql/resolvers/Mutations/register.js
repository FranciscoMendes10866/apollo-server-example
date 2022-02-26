import { UserModel } from "../../../db/models/index.js";
import { signToken } from "../../../utils/index.js";

export const register = async (parent, args, context) => {
  const result = await UserModel.create({ ...args });
  return {
    id: result.id,
    username: result.username,
    token: signToken({ userId: result.id }),
  };
};
