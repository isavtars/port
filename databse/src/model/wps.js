import mongoose from "mongoose";


const wpostSchema=new mongoose.Schema({

    ptitle:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
      discriptons:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    }
})


const wpmodel= new mongoose.model("works",wpostSchema)

 export default wpmodel;