import mongoose, { mongo } from "mongoose";

let isConnected = false; // track the connection status...

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGODB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("MONGODB connected");
    console.log(process.env.MONGODB_URI)
  } catch (error) {
    console.log(error);
  }
};
