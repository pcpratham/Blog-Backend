// main server backend file

const express = require("express");
const app = express();

app.use(express.json());
const postRoutes = require("./routes/blog");
app.use("/blog/v1",postRoutes);
// app.use(postRoutes)
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server started @ ${PORT}`);
})



const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res) =>
    res.send("hello Duniya")
)