import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserForDb = async (paylood: TUser) => {
  const result = await User.create(paylood);
  return result;
};
const getAllUserForDb = async () => {
  const result = await User.find({}).select("-password");
  return result;
};
const getSingleUserForDb = async (userId: string) => {
  const result = await User.findById(userId).select("-password");
  return result;
};
const updateUserForDb = async (userId: string, paylood: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(userId, paylood, {
    new: true,
    runValidators: true,
  }).select("-password");
  return result;
};

const deleteSingleUserForDb = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId).select("-password");
  return result;
};

export const userServices = {
  createUserForDb,
  getAllUserForDb,
  updateUserForDb,
  getSingleUserForDb,
  deleteSingleUserForDb,
};
