import cloudinary from "cloudinary";
import uploadCloud from "../config/cloudinary.config.js";
import MauDen from "../model/QuanlyMauDen.js";
import NhanDen from "../model/QuanLyNhanDen.js";

// Quan ly mau den
export const getAllMauDen = async (req, res) => {
  try {
    const data = await MauDen.find();
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
export const getMauDenById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MauDen.findById(id);
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
export const addMauDen = async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    const { path, filename } = req.file;
    const mauden = await MauDen.create({
      image: path,
      description,
      filename,
    });
    res.json({
      status: "success",
      data: mauden,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const updateMauDen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const data = await MauDen.findById(id);

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
export const deleteMauDen = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MauDen.findByIdAndDelete(id);
    const { image, filename } = data;

    cloudinary.uploader.destroy(filename);
    await NhanDen.deleteMany({ idMau: data._id });
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

// Quan ly nhan den
export const getAllNhanDen = async (req, res) => {
  try {
    const data = await NhanDen.find();
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
export const getNhanDenById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await NhanDen.findById(id);
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

export const addNhanDen = async (req, res) => {
  try {
    const data = await NhanDen.create(req.body);
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
export const deleteNhanDen = async (req, res) => {
  try {
    const { id } = req.params;
    await NhanDen.findByIdAndDelete(id);
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
export const updateNhanDen = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NhanDen.findByIdAndUpdate(id, req.body, {
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
