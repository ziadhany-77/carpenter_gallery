import mongoose from "mongoose";
import { deleteFile } from "../../../../utils/cloudinary/files.js";

const filesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: 3,
    maxLength: 500,
    required: true,
  },
  path: {
    type: String,
    trim: true,
    required: true,
  },
});

filesSchema.pre(/delete/i, async function (next) {
  const imageWillBeDeleted = await filesModel.findOne(this._conditions);
  if (!imageWillBeDeleted) return next();
  await deleteFile(imageWillBeDeleted.name);
  next();
});

const filesModel = mongoose.model("files", filesSchema);

export default filesModel;
