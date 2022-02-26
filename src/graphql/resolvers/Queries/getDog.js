import { DogModel } from "../../../db/models/index.js";

export const getDog = async (parent, args, context) => {
  const result = await DogModel.findByPk(args.id);
  return result;
};
