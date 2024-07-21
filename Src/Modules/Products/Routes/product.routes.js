import { Router } from "express";
import {
  attachCoverImage,
  attachCoverImageAWS,
} from "../Middlewares/product.middleware.js";
import { authenticate } from "../../Auth/middlewares/authenticate.js";
import validate from "../../../Middlewares/validation.middleware.js";
import { upload } from "../../../Middlewares/upload.middleware.js";
import { authorize } from "../../Auth/middlewares/authorize.js";
import { Role } from "../../../../utils/enums.js";
import {
  addProductSchema,
  deleteProductSchema,
  getProductsSchema,
} from "../Validation/product.validation.js";
import {
  addProduct,
  addProductAWS,
  deleteProduct,
  getProducts,
} from "../Controllers/product.controller.js";

const router = Router();

// router
//   .route("/add")
//   .post(
//     upload.single("cover"),
//     validate(addProductSchema),
//     authenticate,
//     authorize(Role.ADMIN),
//     attachCoverImage(),
//     addProduct
//   );

router.route("/:type").get(validate(getProductsSchema), getProducts);

router
  .route("/one/:productId")
  .delete(
    validate(deleteProductSchema),
    authenticate,
    authorize(Role.ADMIN),
    deleteProduct
  );

router
  .route("/add")
  .post(
    upload.single("cover"),
    validate(addProductSchema),
    authenticate,
    authorize(Role.ADMIN),
    attachCoverImageAWS(),
    addProductAWS
  );

export default router;
