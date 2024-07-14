import bcrybt from "bcrypt";
import jwt from "jsonwebtoken";
import AppError, {
  catchAsyncError,
} from "../../../../utils/errorHandelling.js";
import userModel from "../../Users/Models/user.model.js";

export const signUp = catchAsyncError(async (req, res) => {
  const { userName, email, password, phoneNumber, role } = req.body;

  const hashedPass = bcrybt.hashSync(password, +process.env.HASH_ROUNDS);

  const user = await userModel.create({
    userName,
    email,
    password: hashedPass,
    phoneNumber,
    role,
  });
  const { _id: id } = user;
  const token = jwt.sign(
    { userName, id, phoneNumber, role, email },
    process.env.TOKEN_SECRET
  );
  res.status(201).json({ message: "seccess", token });
});

export const signIn = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user || !bcrybt.compareSync(password, user.password))
    throw new AppError("Wrong email or password");

  const { userName, phoneNumber, role, _id: id } = user;
  const token = jwt.sign(
    { userName, role, id, phoneNumber, email },
    process.env.TOKEN_SECRET
  );
  res.json({ token });
});
