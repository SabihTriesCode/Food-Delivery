import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect('mongodb+srv://sabihkhan2697_db_user:8dUq9ctsU0YBRpNI@cluster0.hxdbucg.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}