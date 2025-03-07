import { TMedicine } from "./medicine.interface";
import { Medicine } from "./medicine.model";

const createMedicineForDb = async (paylood: TMedicine) => {
  const result = await Medicine.create(paylood);
  return result;
};
const getAllMedicineForDb = async () => {
  const result = await Medicine.find({});
  return result;
};
const getSingleMedicineForDb = async (medicineId: string) => {
  const result = await Medicine.findById(medicineId);
  return result;
};
const updateSingleMedicineForDb = async (
  medicineId: string,
  paylood: Partial<TMedicine>
) => {
  const result = await Medicine.findByIdAndUpdate(medicineId, paylood, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteSingleMedicineForDb = async (medicineId: string) => {
  const result = await Medicine.findByIdAndDelete(medicineId);
  return result;
};

export const medicineServices = {
  createMedicineForDb,
  getAllMedicineForDb,
  getSingleMedicineForDb,
  updateSingleMedicineForDb,
  deleteSingleMedicineForDb,
};
