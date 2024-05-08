const user = require("../services/user");
const UserService = require("../services/user");

module.exports = {
  createUser: async (req, res) => {
    console.log("createUser");
    try {
      const { email, name, surname, password } = req.body;
      let user = await UserService.getByEmail(email);

      if (user) {
        const error = new Error("Ya existe un usuario registrado con ese email.");
        error.statusCode = 400;
        throw error;
      }

      await UserService.create(email, password, name, surname);
      res.status(200).json({ ok: true });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message
      });
    }
  },

  getUserById: async (req, res, next) => {
    console.log("getUserById");
    try {
      const userId = req.params.userId;
      const user = await UserService.getById(userId);

      if (!user) {
        const error = new Error("El usuario no existe.");
        error.statusCode = 400;
        throw error;
      }

      res.status(200).json({
        ok: true,
        data: user,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message
      });
    }
  },

  getAllUsers: async (req, res) => {
    console.log("getAllUsers");
    try {
      const users = await UserService.getAll();

      // se borran las contraseñas
      users.map((user) => {
        user.password = undefined; 
      })

      res.status(200).json({
        ok: true,
        data: users,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message
      });
    }
  },

  editUser: async (req, res) => {
    console.log("editUser");
    try {
      const { email, name, surname } = req.body;

      const userId = req.params.userId;

      const data = {
        email,
        name,
        surname,
      };

      await UserService.edit(userId, data);
      
      res.status(201).json({ ok: true, data: user });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserService.delete(userId);

      res.status(200).json({
        ok: true,
        data: user
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: error.message
      });
    }
  },
};