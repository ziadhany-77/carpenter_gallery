import mongoose from "mongoose";
import { productType } from "../../../../utils/enums.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 5,
      maxLength: 15,
      required: true,
    },
    type: {
      type: String,
      enums: [
        productType.DOORS,
        productType.FURNITURE,
        productType.WINDOWS,
        productType.RENOVATION,
      ],
      required: true,
    },
    cover: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "files",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("media", {
  ref: "filesWithProduct",
  localField: "_id",
  foreignField: "productId",
});

productSchema.pre(/find/i, function (next) {
  this.populate("cover", ["-_id"]);
  next();
});
productSchema.pre("findOne", function (next) {
  this.populate("media", ["-productId", "fileId"]);
  next();
});

productSchema.pre(/delete/i, async function (next) {
  const productWillBeDeleted = await productModel.findOne(this._conditions);
  if (!productWillBeDeleted) return next();
  await mongoose.model("files").findByIdAndDelete(productWillBeDeleted.cover);
  await Promise.all(
    productWillBeDeleted.media.map(async (image) => {
      await mongoose.model("filesWithProduct").findByIdAndDelete(image._id);
    })
  );
  next();
});

const productModel = mongoose.model("product", productSchema);
export default productModel;
