import mongoose from "mongoose";

const filesWithProductSchema = new mongoose.Schema({
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "files",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
});

filesWithProductSchema.pre(/find/i, function (next) {
  this.populate("fileId");
  next();
});

const filesWithProductModel = mongoose.model(
  "filesWithProduct",
  filesWithProductSchema
);
export default filesWithProductModel;
