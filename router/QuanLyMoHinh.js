import { Router } from "express";
import {
  addMoHinh,
  deleteMoHinh,
  getAllMoHinh,
  getMoHinhById,
} from "../DAO/MoHinhController.js";
const MoHinhRouter = Router();

MoHinhRouter.route("/").get(getAllMoHinh).post(addMoHinh);
MoHinhRouter.route("/:id").get(getMoHinhById).delete(deleteMoHinh);

export default MoHinhRouter;
