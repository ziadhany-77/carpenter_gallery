import express from "express";
import dotenv from "dotenv";
import connectToDB from "./DataBase/DBconnection.js";
import bootstrap from "./bootstrap.js";
const app = express();
dotenv.config();

connectToDB();
bootstrap(app);

const port = +process.env.PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
