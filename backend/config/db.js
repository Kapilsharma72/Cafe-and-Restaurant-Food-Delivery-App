import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sramulal403:Sharma123@cluster0.9px77lh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

// mongodb+srv://sramulal403:Sharma123@cluster0.9px77lh.mongodb.net/food-del