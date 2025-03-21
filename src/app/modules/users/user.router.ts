import express from "express";
import { userContllors } from "./user.contllor";
import { validationRequest } from "../../middlwares/validationRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlwares/auth";
const router = express.Router();

router.post(
  "/",
  validationRequest(userValidation.createUserValidationSchema),
  userContllors.createUser
);
router.get("/", userContllors.getAllUser);
router.get("/:userId", auth("user", "admin"), userContllors.getSingleUser);
router.patch("/:userId", auth("user", "admin"), userContllors.updateSingleUser);
router.delete("/:userId", auth("admin"), userContllors.deleteSingleUser);

export const userRouter = router;
