const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//Create
router.post("/", UserController.createUser);

//GetById
router.get("/:userId", UserController.getUserById);

//GetAll
router.get("/", UserController.getAllUsers);

//Edit
router.put("/edit/:userId", UserController.editUser);

//Delete
router.put("/delete/:userId", UserController.deleteUser);

module.exports = router;