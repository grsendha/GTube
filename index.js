const express = require("express");
const { PORT } = require("./config/serverConfig");
const { connectDB } = require("./database/databaseConnectivity");
const app = express();

const setupServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`SERVER CONNECTED AT ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

setupServer();
