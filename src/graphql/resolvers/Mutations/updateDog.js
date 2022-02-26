import { DogModel } from "../../../db/models/index.js";

export const updateDog = async (parent, args, context) => {
  const { id, ...rest } = args.input;

  await DogModel.update({ ...rest }, { where: { id } });
  const result = await DogModel.findByPk(id);

  return result;
};
