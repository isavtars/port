import mongoose from "mongoose";

const blogschema= new mongoose.Schema({


    btitle:{
        type:String,
        required:true,
    },
    
    bdescription:{
        type:String,
        required:true,
    },

      
    bcategories:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true
    },

    bstack:{
        type:String,
        required:true
    },

    blink:{
        type:String,
        required:true
    },

    bcontent:{
        type:String,
        required:true
    },



})

const blogmodel= new mongoose.model("blogs",blogschema);

export default blogmodel;