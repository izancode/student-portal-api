import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

export const multerValidation = (error) => {
  return error;
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    // console.log("Multer req  comes", req);
    // console.log("Multer file comes", file);

    if (multerValidation) return;

    const folderPath =
      req.originalUrl === "/api/v1/studentusers"
        ? "student-portal-app/student-profile"
        : "student-portal-app/faculty-profile";
    const fileExtension = path.extname(file.originalname).substring(1);
    const publicId = `${file.fieldname}-${
      req.body.student_first_name +
      req.body.student_middle_name +
      req.body.student_last_name
    }-${Date.now()}`;

    return {
      folder: folderPath,
      public_id: publicId,
      format: fileExtension,
    };
  },
});

export const multerUpload = multer({ storage });
