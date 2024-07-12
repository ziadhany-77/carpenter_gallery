import AppError from "../../../../utils/errorHandelling.js";

export const authorize = (role) => {
  return (req, res, next) => {
    if (role !== req.user.role) throw new AppError("Forbidden", 403);
    next();
  };
};
