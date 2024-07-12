import { Router } from "express";
import authRouter from "../Modules/Auth/routers/auth.routes.js";
import productRouter from "../Modules/Products/Routes/product.routes.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);
v1Router.use("/products", productRouter);

export default v1Router;
