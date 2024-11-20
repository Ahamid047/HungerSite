import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO).then(()=>console.log("DB Connected"));
}
 