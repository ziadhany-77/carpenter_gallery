import AppError, {
  catchAsyncError,
} from "../../../../utils/errorHandelling.js";
import userModel from "../../Users/Models/user.model.js";

export const assertUniqueEmail = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (user) throw new AppError("This email is already taken", 400);
  next();
});
