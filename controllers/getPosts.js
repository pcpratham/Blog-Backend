const post = require("../models/posts");

exports.getallPosts = async (req,res) => {
    try{
        const response = await post.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"Posts fetched succesfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch all posts"
        })
    }
}