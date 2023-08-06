const post = require("../models/posts");


exports.createNewPost = async (req,res) => {
    try{
        const {title,postContent,likes} = req.body;
        const response = await post.create({title,postContent,likes});
        res.status(200).json({
            success:true,
            data:response,
            message:"New Post created succesfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to create new post"
        })
    }
}