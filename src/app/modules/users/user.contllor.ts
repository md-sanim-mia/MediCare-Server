import { asyncCatch } from "../../utilitys/async.catch";
import { userServices } from "./user.service";

const createUser = asyncCatch(async (req, res) => {
  const result = await userServices.createUserForDb(req.body);

  res.status(200).json({
    success: true,
    message: "user success fully created",
  });
});
const getAllUser = asyncCatch(async (req, res) => {
  const result = await userServices.getAllUserForDb();

  res.status(200).json({
    success: true,
    message: "success fully get all users",
    data: result,
  });
});
const getSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserForDb(userId);

  res.status(200).json({
    success: true,
    message: "success fully get single user",
    data: result,
  });
});
const updateSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.updateUserForDb(userId, req.body);

  res.status(200).json({
    success: true,
    message: "success fully get single user",
    data: result,
  });
});

const deleteSingleUser = asyncCatch(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.deleteSingleUserForDb(userId);

  res.status(200).json({
    success: true,
    message: "success fully delete single user",
    data: result,
  });
});
export const userContllors = {
  createUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
