const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    postContent:{
        type:String,
        required:true,
    },
    likes:{
        type:Boolean,
        required:true,
        default:false
    }
});

module.exports = mongoose.model("post" , postsSchema);