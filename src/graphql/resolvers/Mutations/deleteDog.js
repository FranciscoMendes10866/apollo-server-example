import { DogModel } from "../../../db/models/index.js";

export const deleteDog = async (parent, args, context) => {
  const result = await DogModel.findByPk(args.id);
  await DogModel.destroy({ where: { id: args.id } });
  return result;
};
