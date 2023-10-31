import { Schema, model } from "mongoose";
const NhanDenSchema = new Schema({
  status: {
    type: String,
    required: [true, "Cho biết ảnh den co mau gi"],
  },
  idMau: {
    type: Schema.Types.ObjectId,
    ref: "MauDen",
  },
});
const NhanDen = model("NhanDen", NhanDenSchema);
export default NhanDen;
