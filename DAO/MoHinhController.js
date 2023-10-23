import MoHinh from "../model/MoHinhHocMay.js";
export const getAllMoHinh = async (req, res) => {
  try {
    const data = await MoHinh.find();
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
export const getMoHinhById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MoHinh.findById(id);
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
export const addMoHinh = async (req, res) => {
  try {
    const data = await MoHinh.create(req.body);
    res.status(200).json({
      status: "success",
      message: data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const deleteMoHinh = async (req, res) => {
  const { id } = req.params;
  try {
    await MoHinh.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
