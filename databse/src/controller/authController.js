import userModel from "../model/userschema.js";
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"


class AuthController{


    //register
    async adduser(req,res){
        try{

            const myplainpassword = req.body.password;
            const bypassword=await bcrypt.hash(myplainpassword,10)
            const data= new userModel({...req.body,password:bypassword})
            const response= await data.save();
            res.json(response)
        }catch(err){
            res.send({sucess:false,message:"error"+err})
        }
    }

    //loguser
    async loguser (req,res){
        try{

            const email=req.body.email;
            const password=req.body.password;
            const response= await userModel.findOne({email:email});
            if(response === null){
                res.send([])
            }else{
               const depass= bcrypt.compareSync(password,response.password) 
               if(depass){
               
                //jwt
                const token=jwt.sign({id:response._id,username:response.username,isAdmin:response.isAdmin},process.env.JWTSECURIT,{
                    expiresIn:"7d",   
                })
                res.json({
                    id:response._id,
                    username:response.username,
                    email:response.email,
                    sucess:true,
                    token
                })

               }else{
                res.json({sucess:false,message:"login failed"})
               }
            }
         

        }catch(err){
           res.send({sucess:false,message:"erroor mesage loguser"+err})
        }
    }


    
}
export default AuthController;