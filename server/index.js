/* For creating server which we can run in nodemon*/
import express from "express"; /*this will create the server*/
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express()
app.use(cors({
    origin:"https://ai-interview-platform-client-3.onrender.com",
    credentials:true
}))



app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)


const port = process.env.PORT || 6000


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
    connectDb()
})


