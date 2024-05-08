const express = require("express");
const app = express();
const { cors } = require("./config/init");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

const userRoutes = require("./routes/users");

app.use("/api/user", userRoutes);

module.exports = app;