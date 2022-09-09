import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({

username:{
    type:String,
    require:true,
},

email:{
    type:String,
    require:true,
    unique:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("email is not validate")
        }
            
        
    }

},
password:{
    type:String,
    require:true,
    minLength:8,
   
},

isAdmin:{
    type:Boolean
}

})


const userModel= new mongoose.model("avtars",userSchema)

export default userModel;