const express = require("express");
const router = express.Router();


const {createNewPost} = require("../controllers/createPost");
const {getallPosts} = require("../controllers/getPosts");
const {likingPost} = require("../controllers/liking");
const {unlikingPost} = require("../controllers/liking");



router.post("/posts/create",createNewPost);
router.get("/posts",getallPosts);
router.put("/likes/like/:id",likingPost);
router.put("/likes/unlike/:id",unlikingPost);



module.exports = router;