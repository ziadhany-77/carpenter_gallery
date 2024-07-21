import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import s3Client from "./S3clientConfig.js";

export const uploadFileAWS = async (file) => {
  const fileName = createFileName(file.originalname);
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  const fileUrl = `https://${params.Bucket}.s3.${process.env.S3_REGION}.amazonaws.com/${params.Key}`;
  return { fileName, fileUrl };
};

export const createFileName = (originalName) => {
  return `${uuidv4()}-${originalName}`;
};
