import { uploadFile } from "../../../../utils/cloudinary/files.js";
import { uploadFileAWS } from "../../../../utils/S3client/filesMange.js";
import filesModel from "../models/file.model.js";

export const createImage = async (path) => {
  const { fileName, fileUrl } = await uploadFile(path);
  return await filesModel.create({ name: fileName, path: fileUrl });
};

export const createImageAWS = async (file) => {
  const { fileName, fileUrl } = await uploadFileAWS(file);
  return await filesModel.create({ name: fileName, path: fileUrl });
};
