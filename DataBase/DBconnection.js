import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDB = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("connection to database established"))
    .catch(() => console.log("connection to database failed"));
};

export default connectToDB;
