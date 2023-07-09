import express from 'express';
import Color  from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoute.js"
import Razorpay from "razorpay";
import cors from 'cors';


//config env
dotenv.config();



//database config
connectDB();
//rest object
const app =express()

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
  


//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment",paymentRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to Rex Dex'
    })
})

//port
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.dev_mode} on ${PORT}`.bgGreen);
})

app.get("/api/v1/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);