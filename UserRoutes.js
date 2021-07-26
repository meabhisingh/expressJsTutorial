const express = require("express");

const router = express.Router();
const registerUser = require("./UserController");

router.route("/register").post(registerUser);
router.route("/product").delete(registerUser);

module.exports = router;
