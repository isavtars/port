import mongoose from "mongoose";




const dbconnection=()=>{
mongoose.connect(process.env.LOCALMONGO).then(()=>{
    console.log("connections sucess full")
}).catch((err)=>{

    console.log("connections errors")
})
}

export default dbconnection;