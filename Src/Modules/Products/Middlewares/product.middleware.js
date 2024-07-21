import { catchAsyncError } from "../../../../utils/errorHandelling.js";
import { createImage, createImageAWS } from "../../files/utils/files.utils.js";

export const attachCoverImage = () =>
  catchAsyncError(async (req, res, next) => {
    if (!req.file) return next();
    const image = await createImage(req.file.path);
    req.body.cover = image._id;
    next();
  });
export const attachCoverImageAWS = () =>
  catchAsyncError(async (req, res, next) => {
    if (!req.file) return next();
    const file = req.file;
    const image = await createImageAWS(file);
    req.body.cover = image._id;
    next();
  });
