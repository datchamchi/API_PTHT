import { Schema, model } from "mongoose";
const NhanVachSchema = new Schema({
  vach: {
    type: Boolean,
    required: [true, "Cho biết ảnh có vach ke duong haykhông"],
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
    ref: "MauVach",
  },
});
const NhanVach = model("NhanVach", NhanVachSchema);
export default NhanVach;
