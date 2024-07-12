import { uploadFile } from "../../../../utils/cloudinary/files.js";
import filesModel from "../models/file.model.js";

export const createImage = async (path) => {
  const { fileName, fileUrl } = await uploadFile(path);
  return await filesModel.create({ name: fileName, path: fileUrl });
};
