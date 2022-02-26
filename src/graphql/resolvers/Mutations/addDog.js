import { DogModel } from "../../../db/models/index.js";

export const addDog = async (parent, args, context) => {
  const result = await DogModel.create({ ...args.input });
  return result;
};
