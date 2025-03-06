import express from "express";
import { userContllors } from "./user.contllor";
const router = express.Router();

router.post("/", userContllors.createUser);
router.get("/", userContllors.getAllUser);
router.get("/:userId", userContllors.getSingleUser);
router.patch("/:userId", userContllors.updateSingleUser);
router.delete("/:userId", userContllors.deleteSingleUser);

export const userRouter = router;
