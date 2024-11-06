const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MongoDB_URI);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
