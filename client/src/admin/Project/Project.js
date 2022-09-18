import React from 'react'
import Dnav from '../Dnav/Dnav'
import "./Project.css"
import {Link} from "react-router-dom"

const Project = () => {
  return (
    <div>
   <Dnav/>

   <div class="eprojectscont mx-2  my-1 bg-white">
   <div class="ecreatepost flex bg-white justify-between items-center shadow-md h-20">
   <div class="div"></div>
   <Link to="addproject">
    <button className='bg-[#FCA61F] h-12 rounded-sm px-1 text-white shadow-sm'>addproject</button>
    </Link>
   </div>
   </div>
     
    </div>
  )
}

export default Project