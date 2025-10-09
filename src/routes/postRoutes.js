const express = require("express");
const router = express.Router();
const { createPost, getPosts } = require( "../controllers/postController");
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, createPost);

router.get("/", getPosts);

module.exports = router;