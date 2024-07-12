import jwt from "jsonwebtoken";
import AppError from "../../../../utils/errorHandelling.js";

export const authenticate = (req, res, next) => {
  const token = req.header("token");

  if (!token || !token.startsWith("Bearer"))
    throw new AppError("unauthorized", 401);

  const bearerToken = token.split(" ")[1];

  try {
    const decodedToken = jwt.verify(bearerToken, process.env.TOKEN_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new AppError(error.message, 498);
  }
};
