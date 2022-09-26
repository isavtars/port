import React from 'react'
import { Link } from 'react-router-dom'


import Image from "../../assets/images/fof.png"
const FOF = () => {
  return (
    <div>

        <div className='img flex h-screen justify-center items-center bg-[#ffffff]'>
            <img src={Image} alt="" className='sd h-64' />
        </div>
       <div className="footer bg-blue-500 h-20 mx-2 rounded-md flex text-white justify-between items-center px-2">

        <Link to="/"><h1>@avtar</h1></Link> 
        <h1>power by it garage</h1>

       </div>
    </div>
  )
}

export default FOF