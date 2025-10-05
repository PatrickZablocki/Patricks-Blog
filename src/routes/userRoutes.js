// User Routen für Registierung & Login

const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// POST /api/users/login
router.post("/register", register);

// POST /api/users/login
router.post("/login", login);

module.exports = router;