import mongoose from "mongoose";
import { Role } from "../../../../utils/enums.js";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    maxLength: 15,
    required: true,
  },
  role: {
    type: String,
    enum: [Role.ADMIN, Role.USER],
    default: Role.USER,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
