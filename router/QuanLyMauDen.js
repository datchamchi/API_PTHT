import { Router } from "express";
import {
  addMauDen,
  deleteMauDen,
  getAllMauDen,
  getMauDenById,
  updateMauDen,
} from "../DAO/DenController.js";
import uploadCloud from "../config/cloudinary.config.js";

const QLDenRouter = Router();

QLDenRouter.route("/")
  .get(getAllMauDen)
  .post(uploadCloud.single("image"), addMauDen);

QLDenRouter.route("/:id")
  .get(getMauDenById)
  .delete(deleteMauDen)
  .patch(uploadCloud.single("image"), updateMauDen);

export { QLDenRouter };
