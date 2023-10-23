import mongoose, { Schema, model } from "mongoose";
const MoHinhSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "must have name"],
  },
  path: {
    type: String,
  },
  time: {
    type: Number,
  },
  acc: {
    type: Number,
  },
  pre: {
    type: Number,
  },
  recall: {
    type: Number,
  },
  f1: {
    type: Number,
  },
  active: Boolean,
});
const MoHinh = model("MoHinhHocMay", MoHinhSchema);
export default MoHinh;
