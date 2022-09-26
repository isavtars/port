//impo expoe
import express from 'express';
import cors from "cors"
import "dotenv/config"
import dbconnection from "./model/dbconnections.js"
import authroute from "./routes/authRoutes.js"
import apiroute from './routes/apiRoute.js';
import blogRoute from "./routes/blogapiRoute.js";

//middlearw
const app = express();
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT;

//this fro iamge multer 
//static host the folder
app.use(express.static("public"))




app.get("/",(req,res)=>{
   res.send("hello from supper home")
})


//auth Routes
app.use("/auth",authroute)


//api router
app.use("/api", apiroute)

//blogapi
app.use("/blogs",blogRoute)






app.listen(PORT,(err)=>{
   console.log(`server Listening on port ${PORT}`)
   dbconnection()
})