import { DogModel } from "../../../db/models/index.js";

export const getDogs = async (parent, args, context) => {
  const result = await DogModel.findAll();
  return result;
};
