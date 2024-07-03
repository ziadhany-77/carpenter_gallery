import express from 'express'
import AppError from './utils/errorHandelling.js'
import v1Router from './Src/Routes/v1Router.js'



const bootstrap = (app)=>{
app.use(express.json())

app.use("/api/v1", v1Router)

app.all("*", (req,res,next)=>{
    throw new AppError("Route Not Found")
})

app.use((error, req, res, next) => {
    const { message, statusCode, stack } = error;
    res.status(statusCode || 500).json({
      message,
      ...(process.env.MODE === "development" && { stack }),
    });
  });
}



export default bootstrap