import React, {} from 'react'
import "./Dside.css"
import {Link} from "react-router-dom"

// FaVaadin
// TbBrandGravatar
// GiBalaclava
//RiAccountPinCircleFill
//SiGoogleanalytics
//IoIosArrowForward
//IoIosArrowDown
//MdDashboard
//FiUsers
import {GiBalaclava} from "react-icons/gi"
import {AiFillHome} from "react-icons/ai"
import {RiAccountPinCircleFill,RiProductHuntFill} from "react-icons/ri"
import {SiGoogleanalytics,SiBlogger,SiAuth0} from "react-icons/si"
import {IoIosArrowDown,IoIosArrowForward} from "react-icons/io"

import {FiUsers} from "react-icons/fi"



const Dside = () => {

   
  return (
    <div className='dside bg-gray-800'>
      <div className="dsideco">

        <div className="dheader">
            <div className="dlogo flex items-center py-7  px-2 cursor-pointer">
            
                <GiBalaclava size={40} color="white"/>
                <h6 className='text-xl font-bold text-orange-400'>Dashbaord</h6>
            </div>
            <hr />
        </div>


        {/* //General */}
        <div className="general">
        <div className="gencont px-2 py-7 cursor-pointer">
        <span className='text-zinc-50 uppercase py-2 px-2'>General</span>

        <div className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">
        <Link to="/dashboard" className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">  
           <AiFillHome size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>	overview</h6>
           </Link>
        </div>


        <div className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">
        <Link to="/dashboard/account" className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">  
           <RiAccountPinCircleFill size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Account</h6>
           </Link>
        </div>
        

        <div className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">
        <Link to="/dashboard/analysics" className="overwiew flex items-center hover:bg-slate-600 p-2 rounded-sm">  
           <SiGoogleanalytics size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Analysics</h6>
           </Link>
        </div>

        </div>
        </div>



        {/* management */}
        <div className="manag relative">
            <div className="managecont px-2 py-7 cursor-pointer">
            <span className='text-zinc-50 uppercase px-2 mb-5'>management</span>

              {/* PROJECT */}
              <div className="superpro">
          <Link to="/dashboard/Project" >
            <div className="projects  flex items-center hover:bg-slate-600 p-2 rounded-sm" >
          
          
            <div className="sideo flex items-center flex-1">
           <RiProductHuntFill size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Project</h6>
          </div>
          <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
       
        </div>
        </Link>
      </div>


      {/* //users */}
      <div className="superuser">
      <Link to="/dashboard/user" >
            <div className="user  flex items-center hover:bg-slate-600 p-2 rounded-sm" >
            <div className="sideo flex items-center flex-1">
           <FiUsers size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>user</h6>
          </div>
         <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
        </div>
        </Link>
      </div>

      {/* blogs */}

      <div className="superdblog">
      <Link to="/dashboard/dblog" >
            <div className="dblog  flex items-center hover:bg-slate-600 p-2 rounded-sm" >
            <div className="sideo flex items-center flex-1">
           <SiBlogger size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Blog</h6>
          </div>
         <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
        </div>
        </Link>
      </div>

        
      </div>


            </div>

            {/* pages */}
            <div className="pages">
                <div className="pagescont px-2 py-7 cursor-pointer">
                <span className='text-zinc-50 uppercase px-2 mb-5'>pages</span>
                  

                      {/* auth */}
              <div className="superpro">
              <Link to="/dashboard/auth" >
            <div className="projects  flex items-center hover:bg-slate-600 p-2 rounded-sm" >    
                    <div className="sideo flex items-center flex-1">
             <SiAuth0 size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Auth</h6>
          </div>
          <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
        </div>
        </Link>
      </div>

      
                      {/* auth */}
                      <div className="superpro">
            <div className="projects  flex items-center hover:bg-slate-600 p-2 rounded-sm" >            <div className="sideo flex items-center flex-1">
             <SiAuth0 size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Auth</h6>
          </div>
          <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
        </div>
      </div>
      
                      {/* auth */}
                      <div className="superpro">
            <div className="projects  flex items-center hover:bg-slate-600 p-2 rounded-sm" >            <div className="sideo flex items-center flex-1">
             <SiAuth0 size={24} color="white" />
           <h6 className=' ml-2 text-xl font-bold text-green-500'>Auth</h6>
          </div>
          <div className="list">
            <IoIosArrowForward size={20} color="white"/>
         </div>
        </div>
      </div> 
                </div>
            </div>




        </div>
      </div>
    
  )
}

export default Dside