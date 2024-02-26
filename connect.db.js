import mongoose from "mongoose";

const username = "jivanabam";
const password = "Jibana@Bam11";
const databaseName = "broadways";

const dbURL = `mongodb+srv://${username}:${encodeURIComponent(
  password
)}@cluster0.sxiefxl.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;
const connectDb = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("DB connection established...");
  } catch (error) {
    console.log(error.message);
    console.log("DB connection failed...");
  }
};

export default connectDb;
