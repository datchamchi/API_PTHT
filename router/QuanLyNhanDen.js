import { Router } from "express";
import {
  addNhanDen,
  deleteNhanDen,
  getAllNhanDen,
  getNhanDenById,
  updateNhanDen,
} from "../DAO/QuanLyDen.js";

const QLNhanDen = Router();

QLNhanDen.route("/").post(addNhanDen).get(getAllNhanDen);

QLNhanDen.route("/:id")
  .get(getNhanDenById)
  .delete(deleteNhanDen)
  .patch(updateNhanDen);
export { QLNhanDen };
