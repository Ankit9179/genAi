import mongoose from "mongoose";

const connectionDBFuntion = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/genai`);
    console.log("mongoDB is connected successfuly");
  } catch (error) {
    console.log(`error from mongo cunnection and error is ${error}`);
  }
};

export default connectionDBFuntion;
