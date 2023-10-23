import cloudinary from "cloudinary";
import uploadCloud from "../config/cloudinary.config.js";
import MauVach from "../model/MauVach.js";
import NhanVach from "../model/NhanVach.js";

// Quan ly mau Vach
export const getAllMauVach = async (req, res) => {
  try {
    const data = await MauVach.find();
    res.json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const getMauVachById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MauVach.findById(id);
    res.json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const addMauVach = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    const { path, filename } = req.file;
    const mauVach = await MauVach.create({
      image: path,
      description,
      filename,
    });

    res.json({
      status: "success",
      data: mauVach,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const updateMauVach = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const data = await MauVach.findById(id);

    if (req.file) {
      await cloudinary.uploader.destroy(data.filename);
      data.image = req.file.path;
      data.filename = req.file.filename;
    }
    if (description) data.description = description;
    const newData = await data.save();

    res.status(200).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const deleteMauVach = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MauVach.findByIdAndDelete(id);
    const { image, filename } = data;

    cloudinary.uploader.destroy(filename);
    await NhanVach.deleteMany({ idMau: data._id });
    res.status(200).json({
      status: "success",
      message: "Delete successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

// Quan ly nhan Vach
export const getAllNhanVach = async (req, res) => {
  try {
    const data = await NhanVach.find();
    res.status(200).json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const getNhanVachById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await NhanVach.findById(id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const addNhanVach = async (req, res) => {
  try {
    const data = await NhanVach.create(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const deleteNhanVach = async (req, res) => {
  try {
    const { id } = req.params;
    await NhanVach.findByIdAndDelete(id);
    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const updateNhanVach = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NhanVach.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: false,
    });
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
