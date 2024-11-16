import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://greatstack:9044288589@cluster0.6xrqi.mongodb.net/hungersite').then(()=>console.log("DB Connected"));
}

