import { v2 as cloudinary } from "cloudinary";

export const uploadFile = async (path) => {
  const { public_id: fileName, secure_url: fileUrl } =
    await cloudinary.uploader.upload(path, { resource_type: "auto" });

  return { fileName, fileUrl };
};

export const deleteFile = async (imageName) => {
  await cloudinary.uploader.destroy(imageName);
};
