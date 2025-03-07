import { asyncCatch } from "../../utilitys/async.catch";
import { medicineServices } from "./medicine.service";

const createMedicine = asyncCatch(async (req, res) => {
  const result = await medicineServices.createMedicineForDb(req.body);
  res.status(200).json({
    success: true,
    message: "medicine success fully added",
    data: result,
  });
});
const getAllMedicines = asyncCatch(async (req, res) => {
  const result = await medicineServices.getAllMedicineForDb();
  res.status(200).json({
    success: true,
    message: " success fully get all medicine ",
    data: result,
  });
});
const getSingleMedicines = asyncCatch(async (req, res) => {
  const { medicineId } = req.params;
  const result = await medicineServices.getSingleMedicineForDb(medicineId);
  res.status(200).json({
    success: true,
    message: " success fully get single medicine ",
    data: result,
  });
});
const updateSingleMedicines = asyncCatch(async (req, res) => {
  const { medicineId } = req.params;
  const result = await medicineServices.updateSingleMedicineForDb(
    medicineId,
    req.body
  );
  res.status(200).json({
    success: true,
    message: " success fully updated single medicine ",
    data: result,
  });
});
const deleteSingleMedicines = asyncCatch(async (req, res) => {
  const { medicineId } = req.params;
  const result = await medicineServices.deleteSingleMedicineForDb(medicineId);
  res.status(200).json({
    success: true,
    message: " success fully delete single medicine ",
  });
});

export const medicineContllors = {
  createMedicine,
  getAllMedicines,
  getSingleMedicines,
  updateSingleMedicines,
  deleteSingleMedicines,
};
