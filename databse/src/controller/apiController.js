import wpmodel from "../model/wps.js"



class ApiController {

    //getdata required is admmin or not crud=C
    async adddata(req,res,imageName){
        try{
          if(req.user.isAdmin){
            const data= new wpmodel({...req.body,image:imageName})
            const response = await data.save();
            res.json({sucess:true, message:"sucees fulli create post"})
          }
          else{
            res.status(403).json("you are not allowed babay")
          }
        }catch(err){
            res.json(err)

        }
    }

    //getdata all the data R
    async getdata(req,res){
        try{ 
           
          const data =await  wpmodel.find();


        //we make the images
        //befor unsure that host the public files on the sever express.static
        //app.use(express.static("public"))
        for (let d of data) {
            d.image = "http://localhost:8000/uploads/" + d.image;
            // console.log(d.image);
          }
          res.status(200).json(data)
        }catch(err){
            res.send(err)
        }

    }


    //delpost 
    //delete post by admin ?? D
    async delpost(req,res){     
      const id =req.params.id;
      

      try{
        if(req.user.isAdmin){
        if(id){
        const data= await wpmodel.findOneAndDelete(id);
        res.json({sucess:true,message:"sucees fully delete"})
        }else{
          res.json({sucess:false,message:"id not providef"})
        }}else{
          res.status(403).json("you are not allowed babay")
        }
      }catch(err){

        res.json({sucess:false,message:err+"error during delete"})
      }
    }


    //updatapost
    //update by  id 

    async updatapost(req,res,imageName){
      const id =req.params.id;
       try{
        
        if(req.user.isAdmin){
        const update={...req.body, image:imageName}
        const opts = {new: true};
        if(id){
        const data= await wpmodel.findByIdAndUpdate({_id:id},update,opts)
        res.json({sucess:true,message:"suceess while updata"})
        }else{
          res.json({sucess:false,message:"id not provides"})
        }}else{
          res.status(403).json("you are not allowed babay")
        }
       }catch(err){
        res.json(err)
      
       }

    }

    //getbyid
    async getbyid(req,res){
      const id = req.params.id
      try{
        const data= await wpmodel.findById(id);
        res.json(data)
      }catch(err){
        res.json(err)
      }
    }



}

export default ApiController;