import { asyncCatch } from "../../utilitys/async.catch";
import { userServices } from "./user.service";

const createUser = asyncCatch(async (req, res) => {
  const result = await userServices.createUserForDb(req.body);

  res.status(200).json({
    success: true,
    message: "user success fully created",
  });
});

export const userContllors = {
  createUser,
};
