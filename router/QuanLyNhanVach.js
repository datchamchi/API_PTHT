import { Router } from "express";
import {
  addNhanVach,
  deleteNhanVach,
  getAllNhanVach,
  getNhanVachById,
  updateNhanVach,
} from "../DAO/VachController.js";

const QLNhanVach = Router();

QLNhanVach.route("/").post(addNhanVach).get(getAllNhanVach);

QLNhanVach.route("/:id")
  .get(getNhanVachById)
  .delete(deleteNhanVach)
  .patch(updateNhanVach);
export { QLNhanVach };
