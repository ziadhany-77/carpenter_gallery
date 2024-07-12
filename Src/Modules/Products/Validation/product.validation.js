import Joi from "joi";
import { productType } from "../../../../utils/enums.js";

export const addProductSchema = Joi.object({
  body: {
    name: Joi.string().min(5).max(15).trim().required(),
    type: Joi.string().valid(
      productType.DOORS_AND_WINDOWS,
      productType.FURNITURE,
      productType.RENOVATION
    ),
  },
  params: {},
  query: {},
  file: Joi.object().required(),
});

export const getProductsSchema = Joi.object({
  body: {},
  params: {
    type: Joi.string().valid(
      productType.DOORS_AND_WINDOWS,
      productType.FURNITURE,
      productType.RENOVATION
    ),
  },
  query: {},
});
export const getProductSchema = Joi.object({
  body: {},
  params: {
    productId: Joi.string().hex().length(24),
  },
  query: {},
});
