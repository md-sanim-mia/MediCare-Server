import { object, z } from "zod";

const createMedicineSchemaValidation = z.object({
  body: z.object({
    brand: z.string(),
    category: z.string(),
    description: z.string(),
    dosage: z.string(),
    expiry_date: z.string(),
    form: z.string(),
    image: z.string(),
    name: z.string(),
    prescription_required: z.boolean(),
    price: z.number(),
    side_effects: z.array(z.string()),
    stock: z.number(),
    uses: z.array(z.string()),
  }),
});
const updatedMedicineSchemaValidation = z.object({
  body: z.object({
    brand: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    dosage: z.string().optional(),
    expiry_date: z.string().optional(),
    form: z.string().optional(),
    image: z.string().optional(),
    name: z.string().optional(),
    prescription_required: z.boolean().optional(),
    price: z.number().optional(),
    side_effects: z.array(z.string()).optional(),
    stock: z.number().optional(),
    uses: z.array(z.string()).optional(),
  }),
});

export const medicineValidation = {
  createMedicineSchemaValidation,
  updatedMedicineSchemaValidation,
};
