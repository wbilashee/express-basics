const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getSingleUser,
} = require("../controllers/user");

router
    .get("/", getAllUsers)
    .get("/:id", getSingleUser);


module.exports = router;