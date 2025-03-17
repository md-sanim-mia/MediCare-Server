import exress from "express";
import { userRouter } from "../modules/users/user.router";
import { authRouters } from "../modules/auth/auth.router";
import { medicineRouter } from "../modules/medicine/medicine.router";

const router = exress.Router();

const moduleRouters = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouters,
  },
  {
    path: "/medicines",
    route: medicineRouter,
  },
];

moduleRouters.forEach((item) => router.use(item.path, item.route));

export default router;
