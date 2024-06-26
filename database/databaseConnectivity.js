const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/serverConfig");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `MONGODB CONNECTED ON HOST ${connectionInstance.connection.host} : ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR ", error);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
