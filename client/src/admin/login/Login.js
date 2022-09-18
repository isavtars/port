import React from 'react'
import {GiBalaclava} from "react-icons/gi"
import "./Login.css"

//GiBalaclava
import iamgesl from "../../assets/images/dl.png"

const Login = () => (
  <div className="Dlogin">

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
      <form action="" className='mx-2'>

        <div className="dlemail">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='email'/>
        </div>

        <div className="dlpassword">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='password '/>
        </div>

        <div class="dlsubmit w-full">
              <input type="submit" className='bg-[#FCA61F] dlsubmit '/>
        </div>
      </form>
    </div>
  </div>



  </div>
)

export default Login