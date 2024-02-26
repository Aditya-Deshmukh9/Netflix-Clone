import mongoose from "mongoose";

const URL = process.env.MongoDB_Url;

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connection successfull to data base");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

export default connectDb;
