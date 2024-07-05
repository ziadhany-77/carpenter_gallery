import express from "express";
import dotenv from "dotenv";
import connectToDB from "./DataBase/DBconnection.js";
import bootstrap from "./bootstrap.js";
import configCloudinary from "./utils/cloudinary/cloudinary.js";

const port = +process.env.PORT;
const app = express();

dotenv.config();

// configCloudinary();
connectToDB();
bootstrap(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
