import blogmodel from "../model/blogsp.js"


class Blogcontrioller{

    //getdata
    async getdata(req,res){
         res.send("get the blogs")
    }


    //postblog

    async postblog(req,res,imageName){
        try{
            const response= new blogmodel({...req.body,image:imageName});
            const data = await response.save();
            res.json({sucess:true,message:"addsucessfull"})

        }catch(err){
          res.send(err)
        }
    }

    //getblog universal get blog
    async getblog(req,res){
        try{
          
        
            const data = await  blogmodel.find();

            for (let d of data){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
            res.send(data)
        }catch(err){
            res.send(err)
        }
    }


    // getblogadminquery universal get blog by search
    async getblogadminquery(req,res){
        const {q} = req.query;
        try{

            if(q){

            const data = await  blogmodel.find({$or:[{btitle:q},{bcategories:q},{bstack:q}]});

            for (let d of data){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
            res.send(data)}

        else{
          res.send({sucess:false,message:"no any search"})
        }

        }catch(err){
            res.send(err)
        }
    }

    //getblogadmin
    async getblogadminq(req,res){
        try{
          
            if(req.user.isAdmin){
            const data = await  blogmodel.find();

            for (let d of data){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
            res.send(data)}else{
                res.send({sucess:false,message:"you are not admin"})
            }
        }catch(err){
            res.send(err)
        }
    }


    //getpaginations
    //universal getpaginations data
   
    async getpaginations(req,res){
        try{
            let{page,limit}=req.query;
            
            if(!page ) page=1;
            if(!limit) limit=10;

            //logic if we have 100data and limit by 10 it divede by 10
            //page 1= limi 10   //data start from  1
            //page 2 = limit 30  //data start from 21
            const skip = (page - 1)*10;

            const data = await blogmodel.find().skip(skip).limit(limit);

            for (let d of data){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
            
            res.send({page:page,limit:limit,data})
            
        }catch(err){
            res.send(err)
        }
    }



    //deleteblogs
    async deleteblogs(req,res){
        const id =req.params.id;
      

        try{
          if(req.user.isAdmin){
          if(id){
          const data= await blogmodel.findOneAndDelete(id);
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




    //hrjiwhrjwhrjwer
    //updatapost
    async updatesblog(req,res,imageName){
        const id =req.params.id;
         try{
          
          if(req.user.isAdmin){
          const update={...req.body, image:imageName}
          const opts = {new: true};
          if(id){
          const data= await blogmodel.findByIdAndUpdate({_id:id},update,opts)
          res.json({sucess:true,message:"update sucess full"})
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
          const data= await blogmodel.findById(id);
          res.json(data)
        }catch(err){
          res.json(err)
        }
      }

}


export default Blogcontrioller;