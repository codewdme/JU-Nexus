const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/junexus?authSource=admin";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected to db successfully");
};

module.exports = connectToMongo;
