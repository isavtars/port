import React, { useContext, useState } from 'react'
import {GiBalaclava} from "react-icons/gi"
import "./Login.css"
import Api from "../../Api/backurl.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//GiBalaclava
import iamgesl from "../../assets/images/dl.png"

//context
import {loginStart,loginsucess,loginfaliled} from "../../context/authCont/authAction";
import {Authcontext} from "../../context/authCont/authContext"

const Login = () => {

const [input, setinput] = useState({})
const {dispatch} = useContext(Authcontext)

  //handlelogin
const handlelogin=(e)=>{
  setinput({...input, [e.target.name]:e.target.value})
console.log(input.email)
console.log(input.password)

}

//authlogin
const authlogin=async(e)=>{

  e.preventDefault();
  dispatch(loginStart())
  try{
  //validations
  // if(input.email==="" || input.password===""){
  //   console.log("email or passwordd  is required")
  // }
  // else if(input.email.trim() || input.password.trim()){
  //   console.log("not be trim required")
  // }
  const response= await Api.post("/auth/login",{...input});
  console.log(response.data)

  if(response.data.sucess){

  //
  toast.success("login sucess")
  setinput({})
  e.target.reset();
  }
  dispatch(loginsucess(response.data))



  }catch(err){
    console.log("loggin eroors")
    dispatch(loginfaliled())
  }



}


return(
  <div className="Dlogin">
  <ToastContainer />
  <div className="dlcont">
    <div className="side1 shadow-lg rounded-sm  ">

      <img src={iamgesl} alt="" className="loginimg" />
    </div>

    <div class="md flex">
      <div className='bg-red-500 h-60 w-2 ml-1'></div>
      <div className='bg-gray-800 h-50 w-2 ml-1'></div>
      <div className='bg-green-500 h-60 w-2 ml-1'></div>
    </div>
    <div className="sidetwo">

    <div className="headline bg-white h-16 flex justify-center items-center shadow-sm mx-2 ">   <h2 class="text-[#FCA61F] text-2xl">login</h2> <GiBalaclava size={40} color="red"/></div>

 <hr className='mx-2 my-2 bg-red-500 '/>
      <form action="" className='mx-2' onSubmit={authlogin}>

        <div className="dlemail">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='email' name="email" onChange={handlelogin}/>
        </div>

        <div className="dlpassword">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='password ' name="password"  onChange={handlelogin}/>
        </div>

        <div className="dlsubmit w-full">
              <input type="submit" className='bg-[#FCA61F] dlsubmit '/>
        </div>
      </form>
    </div>
  </div>



  </div>
)
}
export default Login
