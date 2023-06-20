import express from 'express';
const colors =require('colors');
const dotenv=require('dotenv');
const morgan=require('morgan');
const { default: connectDB } = require('./config/db');

//config env
dotenv.config();



//database config
connectDB();
//rest object
const app =express()

//middleware
app.use(express.json())
app.use(morgan('dev'));

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