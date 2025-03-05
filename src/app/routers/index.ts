import exress from "express";
import { userRouter } from "../modules/users/user.router";

const router = exress.Router();

const moduleRouters = [
  {
    path: "/user",
    route: userRouter,
  },
];

moduleRouters.forEach((item) => router.use(item.path, item.route));

export default router;
