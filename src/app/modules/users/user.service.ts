import { StatusCodes } from "http-status-codes";
import { AppError } from "../../Error/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import CreateToken from "../../utilitys/createToken";
import config from "../../config/config";

const createUserForDb = async (paylood: TUser) => {
  const isExistUser = await User.findOne({ email: paylood.email });
  if (isExistUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, "user already exist");
  }
  const result = await User.create(paylood);
  const jwtPayload = {
    email: result?.email,
    role: result?.role,
  };
  const accessToken = CreateToken(jwtPayload, config.scrict_key as string);
  return { accessToken };
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
