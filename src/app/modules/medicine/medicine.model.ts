import { model, Schema } from "mongoose";
import { TMedicine } from "./medicine.interface";

const medicineSchema = new Schema<TMedicine>(
  {
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    dosage: { type: String, required: true },
    expiry_date: { type: String, required: true },
    form: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    prescription_required: { type: Boolean, required: true },
    price: { type: Number, required: true },
    side_effects: { type: [String], required: true },
    stock: { type: Number, required: true },
    uses: { type: [String], required: true },
  },
  { timestamps: true }
);

export const Medicine = model<TMedicine>("medicines", medicineSchema);
