import AppError, {
  catchAsyncError,
} from "../../../../utils/errorHandelling.js";
import filesWithProductModel from "../Models/product.files.model.js";
import { createImage } from "../../files/utils/files.utils.js";
import productModel from "../Models/product.model.js";
import { ApiFeatures } from "../../../../utils/apiFeatures.js";

export const addProduct = catchAsyncError(async (req, res) => {
  const product = await productModel.create(req.body);
  // if (req.files?.images)
  //   await Promise.all(
  //     req.files.images.map(async (file) => {
  //       try {
  //         const image = await createImage(file.path);
  //         await filesWithProductModel.create({
  //           fileId: image._id,
  //           productId: product._id,
  //         });
  //       } catch (error) {
  //         return next(error);
  //       }
  //     }),
  //     req.files.videos.map(async (file) => {
  //       try {
  //         const image = await createImage(file.path);
  //         await filesWithProductModel.create({
  //           fileId: image._id,
  //           productId: product._id,
  //         });
  //       } catch (error) {
  //         return next(error);
  //       }
  //     })
  //   );
  res.status(201).json({
    message: `product added `,
  });
});

export const getProducts = catchAsyncError(async (req, res) => {
  const { type } = req.params;
  const apiFeatures = new ApiFeatures(
    productModel.find({ type }),
    req.query
  ).paginate(10);
  const products = await apiFeatures.query;
  if (!products) throw new AppError("products will be added soon", 400);
  res.json({ products });
});

export const getProduct = catchAsyncError(async (req, res) => {
  const { productId } = req.params;
  const product = await productModel.findById(productId);
  res.json({ product });
});

export const deleteProduct = catchAsyncError(async (req, res) => {
  const { productId } = req.params;
  const product = productModel.findByIdAndDelete(productId);
  res.json({ product, message: "deleted succesfully" });
});
