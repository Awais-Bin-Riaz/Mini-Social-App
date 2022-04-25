import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose.connect(
    "mongodb+srv://admin:<password>@cluster0.6gmmt.mongodb.net/fileUpload?retryWrites=true&w=majority",
    () => {
      console.log("connect to mongoDB Database");
    }
  );
};
export default connectToDatabase;
