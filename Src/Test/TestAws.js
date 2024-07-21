import { Router } from "express";
import s3Client from "../../utils/S3client/S3clientConfig.js";
import { upload } from "../Middlewares/upload.middleware.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

// const tryUpload = async (req, res) => {
//   const file = req.file;
//   console.log(file);
//   const uploadParams = {
//     Bucket: process.env.S3_BUCKET,
//     Key: `55-${file.originalname}`, // Unique key
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   //   const upload = new Upload({
//   //     client: s3Client,
//   //     params: uploadParams,
//   //   });

//   const command = new PutObjectCommand(uploadParams);
//   const data = await s3Client.send(command);
//   const fileUrl = `https://${uploadParams.Bucket}.s3.${process.env.S3_REGION}.amazonaws.com/${uploadParams.Key}`;
//   console.log(fileUrl);
//   res.json(data);
// };

const tryUpload = async (req, res) => {
  const file = req.file;
  console.log("Uploaded file:", file);
  const fileContent = fs.readFileSync(file.originalname);

  const uploadParams = {
    Bucket: process.env.S3_BUCKET,
    Key: `55-${file.originalname}`, // Unique key for the object in the S3 bucket
    Body: fileContent, // File buffer data
    ContentType: file.mimetype, // Mime type of the file
  };

  await s3Client.upload(uploadParams, (err, data) => {
    if (err) {
      console.error("Error uploading file:", err);
    } else {
      console.log(`File uploaded successfully. ${data.Location}`);
    }
  });
  // const command = new PutObjectCommand(uploadParams);
  // const data = await s3Client.send(command);

  const fileUrl = `https://${uploadParams.Bucket}.s3.${process.env.S3_REGION}.amazonaws.com/${uniqueKey}`;
  // console.log("File uploaded successfully. URL:", fileUrl);
};

const router = Router();

router.route("/testAdd").post(upload.single("img"), tryUpload);

export default router;
