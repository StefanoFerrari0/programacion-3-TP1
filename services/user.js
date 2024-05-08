const mongoose = require("mongoose");
const User = require("../models/userModel");

module.exports = {
  create: async (email, password, name, surname) => {

    let newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      email,
      password,
      name,
      surname,
      isDelete: false,
    });

    newUser.password = await User.encryptPassword(newUser.password);

    await newUser.save();
    return newUser;
  },

  getById: async (userId) => {
    const user = await User.findOne({ _id: userId, isDelete: false });
    user.password = undefined;
    return user;
  },

  getByEmail: async (email) => {
    const user = await User.findOne({ email: email, isDelete: false });
    return user;
  },

  getAll: async () => {
    const users = await User.find({ isDelete: false });
    return users;
  },

  edit: async (userId, data) => {
    const user = await User.findByIdAndUpdate(userId, data);
    return user;
  },

  delete: async (userId) => {
    const user = await User.findByIdAndUpdate(userId, { isDelete: true });
    return user;
  },
};