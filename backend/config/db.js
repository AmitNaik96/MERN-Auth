import mongoose from "mongoose";

//mongodb connection
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);  //gets host
    }catch(error){
        console.error(`Error : ${error.message}`);
        process.exit(1);  //passing 1 - will exit the proccess with error
    } 
}

export default connectDB;