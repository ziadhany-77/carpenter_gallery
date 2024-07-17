import { Router } from "express";
import { attachCoverImage } from "../Middlewares/product.middleware.js";
import {
  addProductSchema,
  getProductSchema,
  getProductsSchema,
} from "../Validation/product.validation.js";
import { authenticate } from "../../Auth/middlewares/authenticate.js";
import validate from "../../../Middlewares/validation.middleware.js";
import { upload } from "../../../Middlewares/upload.middleware.js";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../Controllers/product.controller.js";
import { authorize } from "../../Auth/middlewares/authorize.js";
import { Role } from "../../../../utils/enums.js";

const router = Router();

router
  .route("/add")
  .post(
    upload.single("cover"),
    validate(addProductSchema),
    authenticate,
    authorize(Role.ADMIN),
    attachCoverImage(),
    addProduct
  );

router.route("/:type").get(validate(getProductsSchema), getProducts);

router
  .route("/one/:productId")
  .delete(
    validate(getProductSchema),
    authenticate,
    authorize(Role.ADMIN),
    deleteProduct
  );

export default router;
