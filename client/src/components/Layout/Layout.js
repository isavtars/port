import React, { useState } from 'react'
import "./Layout.css"
import { NavLink ,Link} from "react-router-dom";
import { HiOutlineMenuAlt1} from "react-icons/hi";
import {GiSkullCrossedBones } from "react-icons/gi";
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.js'
import { AiFillGithub,AiFillFacebook,AiFillYoutube} from "react-icons/ai";
const Layout = () => {

//toogleevents


const [toogle, settoogle] = useState(false)
const haldleclick=()=>{
   settoogle(!toogle)
}

  return (


  
    <div className='holelayout bg-gray-700'>

      {/* //sidenvbar */}
      <div className='sidenav lg:sticky lg:w-[10vw] lg:float-left'>
      {/* //desktop sidenvbar */}
        <div className='desktopsnav  hidden lg:block   '>
          <Sidebar />
        </div>

         {/* make mobilecointaner using useContext end*/}

         
      {/* // mobile */}
      <div className='moiilecont  lg:hidden flex justify-between items-center'>
         <div className='mx-3 text-2xl flex-1'>
          Avtar
         </div>
          <div className='mx-6'>
            <button onClick={haldleclick}>
            <HiOutlineMenuAlt1 size={30} />
            </button>
          </div>
        

         {/* //this is toogle cointener   tooglrcointener_show  tooglrcointener_hide */}
          {/* <div className={ toogle?" lg:hidden mobiblemw  absolute top-0 left-0 h-full bg-red-500 w-full":"hidden"}> */}



            {/* make mobilecointaner using useContext*/}
          <div className={toogle?"tooglrcointener_show ":"tooglrcointener_hide"}>


          {/* //absolute top-0 right-0 p-5  */}
          <div className='h-20'>
             <button className='absolute top-0 right-0  mx-6  ' onClick={haldleclick}><GiSkullCrossedBones className='crossbone'  size={40} color={"white"} /></button>
          </div>

           <div className="side   ">
            <nav className='flex  flex-col justify-center items-center ' >



           <div className='py-2 text-2xl text-white hover:bg-gray-700  px-40 transition-all duration-150 ease-linear border-hidden'>
            <button onClick={()=>settoogle(!toogle)}> <NavLink to="/">home</NavLink></button>
           </div>

            <div className='py-2 text-2xl text-white hover:bg-gray-700  px-40 transition-all duration-150 ease-linear border-hidden'>
              <button onClick={()=>settoogle(!toogle)}><NavLink to="/about">about</NavLink></button>
            </div>
         <div className='py-2 text-2xl text-white  hover:bg-gray-700  px-36 transition-all duration-150 ease-linear border-hidden'> 
         <button onClick={()=>settoogle(!toogle)}><NavLink to="/myskill">myskill</NavLink></button>
         </div>
                  <div className='py-2 text-2xl text-white hover:bg-gray-700 px-40 transition-all duration-150 ease-linear border-hidden'>
                  <button onClick={()=>settoogle(!toogle)}><NavLink to="/work">work</NavLink></button>
                  </div>

          <div className='py-2 text-2xl text-white hover:bg-gray-700  px-36 transition-all duration-150 ease-linear border-hidden'><button onClick={()=>settoogle(!toogle)}><NavLink to="/contact">contact</NavLink></button></div>

                 <div className='py-2 text-2xl text-white hover:bg-gray-700  px-40 transition-all duration-150 ease-linear border-hidden'><button onClick={()=>settoogle(!toogle)}><NavLink to="/blog">blog</NavLink></button>  </div>

               </nav>


                <ul className='flex px-10 justify-center items-center py-2'>
                    <li><AiFillGithub     size={27} color={"white"}/></li>
                    <li><AiFillYoutube    size={28} color={"white"} /></li>
                    <li><AiFillFacebook   size={27} color={"white"} /></li>
 
                </ul>

                 </div>
             <hr className='mx-10' />


         
          </div>
          </div>
        
          
        </div>
        
      
       


   
      <div className="outlet bg-gray-700 lg:float-right lg:w-[88vw] ">
      <Outlet />
      </div>

    </div>

  )
}

export default Layout