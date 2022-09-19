//apiRoutes
import  express  from "express";
import ApiController from "../controller/apiController.js";
const router=express.Router();
const apicontroller= new ApiController();
import multer from "multer"
// import validateToken from "../middlewar/validateToken.js"
import validateToken from "../middleware/validateToken.js"


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
    res.send("this is from apiRoute home")
})



//requires veriyfing middleware ??Create
router.post("/add",validateToken,upload.single("image"),(req,res)=>{
    apicontroller.adddata(req,res,imageName)
})


//requires veriyfing middleware  ??delete
router.delete("/delpost/:id",validateToken,apicontroller.delpost)

// this for  the normal users 
router.get("/getdata",apicontroller.getdata)





export  default router;