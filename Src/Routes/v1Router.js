import { Router } from "express";
import authRouter from "../Modules/Auth/routers/auth.routes.js";
import productRouter from "../Modules/Products/Routes/product.routes.js";
import testRouter from "../Test/TestAws.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);
v1Router.use("/products", productRouter);
v1Router.use("/test", testRouter);

export default v1Router;
