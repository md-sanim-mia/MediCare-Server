import express from "express";
import { medicineContllors } from "./medicine.contllor";
import { validationRequest } from "../../middlwares/validationRequest";
import { medicineValidation } from "./medicine.validation";
import auth from "../../middlwares/auth";
const router = express.Router();

router.post(
  "/",
  auth("user"),
  validationRequest(medicineValidation.createMedicineSchemaValidation),
  medicineContllors.createMedicine
);
router.get("/", medicineContllors.getAllMedicines);
router.get("/:medicineId", medicineContllors.getSingleMedicines);
router.patch(
  "/:medicineId",
  auth("admin"),
  validationRequest(medicineValidation.updatedMedicineSchemaValidation),
  medicineContllors.updateSingleMedicines
);
router.delete(
  "/:medicineId",
  auth("admin"),
  medicineContllors.deleteSingleMedicines
);

export const medicineRouter = router;
