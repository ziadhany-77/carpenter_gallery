// import { Router } from "express";
// import formidable from "formidable";

// // const forms = formidable({

// // })
// // const parsefile = async (req) => {
// //   return new Promise((resolve, reject) => {
// //     let options = {
// //       maxFileSize: 100 * 1024 * 1024, //100 MBs converted to bytes,
// //       allowEmptyFiles: false,
// //     };

// //     const form = formidable(options);

// //     form.parse(req, (err, fields, files) => {});
// //   });
// // };

// const sendFile = (req, res, next) => {
//   const form = formidable({});

//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     res.json({ fields, files });
//   });
// };

// const router = Router();

// router.route("/testAdd").post(sendFile);

// export default router;
