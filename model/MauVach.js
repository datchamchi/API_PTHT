import { Schema, model } from "mongoose";
const MauVachSchema = new Schema({
  image: {
    type: String,
    required: [true, "Bạn phải cung cấp ảnh cho mẫu vach "],
  },
  description: {
    type: String,
    required: [true, "Bạn phải cung cấp mô tả cho mau  vach"],
  },
  filename: {
    type: String,
  },
});
const MauVach = model("MauVach", MauVachSchema);
export default MauVach;
