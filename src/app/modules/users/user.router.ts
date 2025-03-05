import express from "express";
import { userContllors } from "./user.contllor";
const router = express.Router();

router.post("/", userContllors.createUser);

export const userRouter = router;
