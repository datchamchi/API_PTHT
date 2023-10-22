import { Schema, model } from "mongoose";
const NhanDenSchema = new Schema({
  dendo: {
    type: Boolean,
    required: [true, "Cho biết ảnh có đèn đỏ hay không"],
  },
  toadoX: {
    type: Number,
  },
  toadoY: {
    type: Number,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  idMau: {
    type: Schema.Types.ObjectId,
    ref: "MauDen",
  },
});
const NhanDen = model("NhanDen", NhanDenSchema);
export default NhanDen;
