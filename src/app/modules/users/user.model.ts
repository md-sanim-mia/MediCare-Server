import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const password = this.password;
  if (!password) {
    throw new Error("password is requred");
  }
  const hasPassword = await bcrypt.hash(password, 10);

  if (!hasPassword) {
    throw new Error(" bcrypt solt generate problem ");
  }
  this.password = hasPassword;
  next();
});

export const User = model<TUser>("users", userSchema);
