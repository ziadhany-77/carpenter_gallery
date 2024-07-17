import AppError, {
  catchAsyncError,
} from "../../../../utils/errorHandelling.js";
import productModel from "../Models/product.model.js";
import { ApiFeatures } from "../../../../utils/apiFeatures.js";

export const addProduct = catchAsyncError(async (req, res) => {
  const product = await productModel.create(req.body);
  res.status(201).json({
    message: `product added `,
  });
});

export const getProducts = catchAsyncError(async (req, res) => {
  const { type } = req.params;
  const apiFeatures = new ApiFeatures(productModel.find({ type }), req.query);
  const products = await apiFeatures.query;
  if (!products) throw new AppError("products will be added soon", 400);
  res.json({ products });
});

export const deleteProduct = catchAsyncError(async (req, res) => {
  const { productId } = req.params;
  const product = productModel.findByIdAndDelete(productId);
  res.json({ product, message: "deleted succesfully" });
});
