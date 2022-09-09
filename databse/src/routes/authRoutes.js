import  express  from "express";
import AuthController from "../controller/authController.js"



//middleware
const router=express.Router();
const authController= new AuthController();




router.post("/login",authController.loguser)

router.post("/register",authController.adduser)

export default router;