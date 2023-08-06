const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      // it return promise
  })
  .then(()=>console.log("DB ka Connection is made in heaven"))
  .catch((err)=>{
      console.log("DB connection me error aarha h")
      process.exit(1); // ??find out 
  })
}

module.exports = dbConnect;
