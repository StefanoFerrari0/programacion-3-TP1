const dotenv = require("dotenv");
const { resolve } = require("path");
dotenv.config({ path: resolve(__dirname, "./.env") });

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL
};