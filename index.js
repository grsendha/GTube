const express = require("express");
const { PORT } = require("./config/serverConfig");
const { connectDB } = require("./database/databaseConnectivity");
const app = express();

const setupServer = () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`SERVER CONNECTED AT ${PORT}`);
  });
};

setupServer();
