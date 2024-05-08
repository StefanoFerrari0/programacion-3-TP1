const mongoose = require("mongoose");
const { MONGODB_URL } = require("./index");

module.exports = {
  initializeDB: async () => {
    mongoose.connect(MONGODB_URL);
    mongoose.Promise = global.Promise;
    console.log("Conectado a la base de datos");
  },

  cors: async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  },
};