import { Router } from "express";
import {
  addMauVach,
  deleteMauVach,
  getAllMauVach,
  getMauVachById,
  updateMauVach,
} from "../DAO/VachController.js";
import uploadCloud from "../config/cloudinary.config.js";

const QLVachRouter = Router();

QLVachRouter.route("/")
  .get(getAllMauVach)
  .post(uploadCloud.single("image"), addMauVach);

QLVachRouter.route("/:id")
  .get(getMauVachById)
  .delete(deleteMauVach)
  .patch(uploadCloud.single("image"), updateMauVach);

export { QLVachRouter };
