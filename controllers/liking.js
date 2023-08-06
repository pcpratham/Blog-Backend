const post = require("../models/posts");

exports.likingPost = async(req,res) => {
    try{
        const {id} = req.params;
        const {likes} = req.body;
        const response = await post.findByIdAndUpdate({_id:id},{likes});
        res.status(200).json({
            success:true,
            data:response,
            message:"Post liked succesfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to update likes"
        })
    }
}

exports.unlikingPost = async(req,res) => {
    try{
        const id = req.params.body;
        const {likes} = req.body;

        const response = await post.findByIdAndUpdate({_id:id},{likes});
    }
    catch(err){

    }
}