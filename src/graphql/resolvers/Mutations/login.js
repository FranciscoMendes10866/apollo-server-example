import { UserModel } from "../../../db/models/index.js";
import { signToken } from "../../../utils/index.js";

export const login = async (parent, args, context) => {
  const result = await UserModel.findOne({ where: { username: args.username } });
  return {
    id: result.id,
    username: result.username,
    token: signToken({ userId: result.id }),
  };
};
