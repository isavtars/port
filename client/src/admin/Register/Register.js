import React, { useContext } from 'react'
import {GiBalaclava} from "react-icons/gi"
import "./Register.css"
import {Authcontext } from "../../context/authCont/authContext.js"

//GiBalaclava
import iamgesl from "../../assets/images/dl.png"

const Register = () => {

  const first = useContext(Authcontext)
  console.log(first)

  return(
  <div className="Dlogin">

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
      <form action="" className='mx-2'>


      <div className="dlusername">
      
      <input type="text" className='text-white rounded-sm px-2' placeholder='username'/>
</div>
        <div className="dlemail">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='email'/>
        </div>

        <div className="dlpassword">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='password '/>
        </div>

        <div className="dladmin px-2">
            <label forHTML="admin" className='text-xl text-gray-500 '>isAdmin</label>
            <div className="yes ml-2">
            <input type="radio" className='text-white rounded-sm px-2' placeholder='email' name='admin' /> <span className='text-xl text-gray-500'> yes</span>
            </div>
            <div className="no ml-2">

            <input type="radio" className='text-white rounded-sm px-2' placeholder='email'  name='admin' /> <span className='text-xl text-gray-500'> no</span>
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

