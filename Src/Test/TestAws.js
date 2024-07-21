import { Router } from "express";
import s3Client from "../../utils/S3client/S3clientConfig.js";
import { upload } from "../Middlewares/upload.middleware.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const tryUpload = async (req, res) => {
  const file = req.file;
  console.log(file);
  const uploadParams = {
    Bucket: process.env.S3_BUCKET,
    Key: `55-${file.originalname}`, // Unique key
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(uploadParams);
  const data = await s3Client.send(command);
  const fileUrl = `https://${uploadParams.Bucket}.s3.${process.env.S3_REGION}.amazonaws.com/${uploadParams.Key}`;
  console.log(fileUrl);
  res.json(data);
};

const router = Router();

router.route("/testAdd").post(upload.single("img"), tryUpload);

export default router;
