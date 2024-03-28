const dotenv = require("dotenv");
const path = require("path");
const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });

module.exports = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
