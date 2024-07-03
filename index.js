import express from 'express'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

bootstrap(app)

const port = +process.env.PORT

app.listen(port, () => console.log(`Example app listening on port ${port}!`))