import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dwdveb6qp",
  api_key: "657375929256455",
  api_secret: "R9vIuAoS0PbpQPVIDKIWW2FNoaU",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "image",
  },
});

const uploadCloud = multer({ storage });

export default uploadCloud;
