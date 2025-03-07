import { StatusCodes } from "http-status-codes";
import { AppError } from "../Error/AppError";
import { asyncCatch } from "../utilitys/async.catch";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";
import { User } from "../modules/users/user.model";
const auth = (...requireRole: string[]) => {
  return asyncCatch(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are unauthorize");
    }

    const decoded = jwt.verify(
      token,
      config.scrict_key as string
    ) as JwtPayload;
    const { email, role } = decoded;
    const user = await User.findOne({ email: email, role: role });
    if (!user) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are unauthorize");
    }

    if (requireRole && !requireRole.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "you are unauthorize");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
