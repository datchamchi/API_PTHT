import { Schema, model } from "mongoose";
const MauDenShema = new Schema({
  image: {
    type: String,
    required: [true, "Bạn phải cung cấp ảnh cho mẫu đèn "],
  },
  description: {
    type: String,
    required: [true, "Bạn phải cung cấp mô tả cho nhãn đèn"],
  },
  filename: {
    type: String,
  },
});
const MauDen = model("MauDen", MauDenShema);
export default MauDen;
