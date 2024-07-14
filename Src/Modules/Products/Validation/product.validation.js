import Joi from "joi";
import { productType } from "../../../../utils/enums.js";

export const addProductSchema = Joi.object({
  body: {
    type: Joi.string().valid(
      productType.DOORS_AND_WINDOWS,
      productType.FURNITURE,
      productType.RENOVATION
    ),
  },
  params: {},
  query: {},
  files: Joi.object().required(),
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
