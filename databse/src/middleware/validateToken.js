import jwt from "jsonwebtoken"
import "dotenv/config"


export default (req,res,next)=>{
  
        const token = req.headers.token;
        if(token){
            try{
             jwt.verify(token,process.env.JWTSECURIT,(err,user)=>{
                if(err) res.status(403).send("token not valid");             
              req.user=user;//decode the token
              next();

                
            })
           


        
    }catch(err){

        res.status(403).send(err)
    }

        }else{
            res.status(403).send("token not provides"); 
        


        }
}