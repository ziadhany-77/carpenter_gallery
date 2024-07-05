import { Router } from "express";
import validate from "../../../Middlewares/validation.middleware.js";
import { signinSchema, signupSchema } from "../validation/auth.validation.js";
import { assertUniqueEmail } from "../middlewares/assertUniqueEmail.js";
import { signIn, signUp } from "../controllers/auth.controllers.js";

const router = Router();

router.route("/signup").post(validate(signupSchema), assertUniqueEmail, signUp);
router.route("/signin").post(validate(signinSchema), signIn);

export default router;
