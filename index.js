import express from "express";
import dotenv from "dotenv";
import { QLDenRouter } from "./router/QuanLyMauDen.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { QLNhanDen } from "./router/QuanLyNhanDen.js";
import { QLVachRouter } from "./router/QuanLyMauVach.js";
import { QLNhanVach } from "./router/QuanLyNhanVach.js";
import MoHinhRouter from "./router/QuanLyMoHinh.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch(() => console.log("Connected failed"));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/den/qlmau", QLDenRouter);
app.use("/api/den/qlnhan", QLNhanDen);
app.use("/api/vach/qlmau", QLVachRouter);
app.use("/api/vach/qlnhan", QLNhanVach);
app.use("/api/model", MoHinhRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    status: "failed",
    message: "Path not found",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server start running at ${port}...`);
});
