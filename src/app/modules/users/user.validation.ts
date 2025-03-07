import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    number: z
      .number()
      .min(0, { message: "Number must be a positive value" })
      .optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    role: z
      .enum(["user", "admin"], {
        required_error: "Role is required",
        invalid_type_error: "Role must be either 'user' or 'admin'",
      })
      .optional(),
  }),
});

export const userValidation = {
  createUserValidationSchema,
};
