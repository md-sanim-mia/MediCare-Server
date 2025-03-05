import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserForDb = async (paylood: TUser) => {
  const result = await User.create(paylood);
  return result;
};

export const userServices = {
  createUserForDb,
};
