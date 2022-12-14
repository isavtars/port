import React, { useContext, useState } from 'react'
import {GiBalaclava} from "react-icons/gi"
import "./Register.css"
import {Authcontext } from "../../context/authCont/authContext.js"
import Api from "../../Api/backurl.js"

//GiBalaclava
import iamgesl from "../../assets/images/dl.png"



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Register = () => {


  const navagation = useNavigate()
  const [input, setinput] = useState({})


  //handdlechange
  const handdlechange =(e)=>{
setinput({...input,[e.target.name]:e.target.value})
console.log(input)

  }
 
  //rsubmit
  const rsubmit=async(e)=>{
 e.preventDefault();
 try{
 const response =await  Api.post("/auth/register",{...input});

 if(response.data._id){
console.log("id also come")
toast.success("register sucess")
e.target.reset();
setinput({})
setTimeout(()=>{
  navagation("/login")
},2000)

 }else{
  toast.error("register failed")
 }
 }catch(err){
  console.log(err)

 
 }
  }



  return(
  <div className="Dlogin">
<ToastContainer />
  <div className="drcont">
    <div className="rside1 shadow-lg rounded-sm  ">

      <img src={iamgesl} alt="" className="rimg" />
    </div>

    <div className="md flex">
      <div className='bg-blue-600 h-60 w-2 ml-1'></div>
      <div className='bg-pink-700 h-80 w-2 ml-1'></div>
      <div className='bg-yellow-500 h-full w-2 ml-1'></div>
    </div>
    <div className="sidetwo">

    <div className="headline bg-white h-16 flex justify-center items-center shadow-sm mx-2 ">   <h2 className="text-[#FCA61F] text-2xl">Register</h2> <GiBalaclava size={40} color="red"/></div>

 <hr className='mx-2 my-2 bg-red-500 '/>
      <form action="" className='mx-2' onSubmit={rsubmit}>


      <div className="dlusername">
      
      <input type="text" className='text-white rounded-sm px-2' placeholder='username' onChange={handdlechange}  name="username"/>
</div>
        <div className="dlemail">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='email' onChange={handdlechange} name="email"/>
        </div>

        <div className="dlpassword">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='password ' onChange={handdlechange} name="password"/>
        </div>

        <div className="dladmin px-2">
            <label  htmlFor='isAdmin' className='text-xl text-gray-500 '>isAdmin</label>

            <div className="yes ml-2">
            <input type="radio" className='text-white rounded-sm px-2' placeholder='email' name='isAdmin' value={false}  onChange={handdlechange}/> <span className='text-xl text-gray-500'>true</span>
            </div>

            <div className="no ml-2">
            <input type="radio" className='text-white rounded-sm px-2' placeholder='email' value={true}  name='isAdmin' onChange={handdlechange}/> <span className='text-xl text-gray-500'>false</span>
            </div>
             
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

export default Register

