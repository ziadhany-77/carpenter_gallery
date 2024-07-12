import { catchAsyncError } from "../../../../utils/errorHandelling.js";
import { createImage } from "../../files/utils/files.utils.js";

export const attachCoverImage = () =>
  catchAsyncError(async (req, res, next) => {
    if (!req.files?.cover) return next();
    const image = await createImage(req.files.cover[0].path);
    req.body.cover = image._id;
    next();
  });
