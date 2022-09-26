import express from "express";
const router= express.Router();
import Blogcontrioller from "../controller/blogController.js"
const blogcon= new Blogcontrioller();

import validateToken from "../middleware/validateToken.js";

import multer from 'multer';


let imageName;

  //image sender to the data base and and it store locally
  //multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      imageName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "-" +
        file.originalname.trim();
      cb(null, imageName);
    },
  });
  
    //storage: storage = storage destructuring
  const upload = multer({ storage: storage })  






router.get("/",(req,res)=>{
    res.send("blogs route")
})


router.get("/get",blogcon.getdata)


//add blof from admin
router.post("/blogadd",validateToken,upload.single("image"),(req,res)=>{
    blogcon.postblog(req,res,imageName)
})

//get data for universal
router.get("/getblog", blogcon.getblog);

//get data for admin
router.get("/getblogadmin",validateToken, blogcon.getblogadminq);


// serch by name fillter
router.get("/sfilter", blogcon.getblogadminquery);


//paginations
router.get("/paginations",blogcon.getpaginations)



//dell the blogs
router.delete("/delblogs/:id",validateToken,blogcon.deleteblogs)


//blogsupdateapp
router.patch("/blogupdate/:id",validateToken,upload.single("image"),(req,res)=>{
  blogcon.updatesblog(req,res,imageName)
})


//get by id find blogs
router.get("/blogpostid/:id",validateToken,blogcon.getbyid)


export default router;