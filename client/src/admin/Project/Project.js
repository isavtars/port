import React, { Children, useEffect, useState } from 'react'
import Dnav from '../Dnav/Dnav'
import "./Project.css"
import {Link} from "react-router-dom"
import Api from "../../Api/backurl"

import { MdDeleteSweep, MdUpdate} from 'react-icons/md';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Project = () => {

  const [data, setdata] = useState([])
  useEffect(() => {

    const getdata= async()=>{

      try{
        const response= await  Api.get("/api/getdata");
        console.log(response.data)
        setdata(response.data)


      }catch(err){
          console.log(err)
      }


    }
    getdata();
  }, [])

  //deleteproject
  const deleteproject=async(id,idx)=>{
   
    try{

      if(window.confirm("are you sure")){
 
       const response= await Api.delete(`/api/delpost/${id}`,
       {
        headers:{         
          "Content-Type": "multipart/form-data",
          token:JSON.parse(localStorage.getItem("user")).token,
        },
      })

      //filter the ui state while backeend hit

      console.log(response.data)
     
      if(response.data.sucess){
        const newproject= data.filter((filtor,index)=>{
          return index!== idx;
        })
       setdata(newproject)
     
       toast.success(" delete sucess")
      }else{
        toast.error(" delete failed")
      }
    }else{
      toast.error("you not confirmed")
    }
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div>
    <div className="dnavcon sticky top-0 ">
    <Dnav />
    </div>

   <div className="eprojectscont mx-2  my-1 bg-white">
   <ToastContainer />
   <div className="ecreatepost flex bg-white justify-between items-center shadow-md h-20 mx-5">
   <div className="div"></div>
   <Link to="addproject">
    <button className='bg-[#FCA61F] h-12 rounded-sm px-1 text-white shadow-sm'>addproject</button>
    </Link>
   </div>

 

 {/* fetching data */}
   <div className="fetchtheproj">
    {
      data.map((datas,index)=>{
        return <div key={index} className="projectcart flex my-1  mx-4 justify-between items-center shadow-md rounded-md cursor-pointer">
        <div className="getposimg  flex items-centers">
          <img src={datas.image} alt="" className='fprojectimg' />
        </div>
          <h1 className='text-[#FCA61F] font-bold text-xl'>{datas.ptitle}</h1>
          <p className='text-[#0ebef4]  text-xl italic'>{datas.link}</p>
          <div class="updelbtn flex">
          <Link to={`/dashboard/Project/updateproject/${datas._id}`}>
            <button className='ml-1 flex justify-center items-center h-10 w-40 rounded-sm shadow-md bg-green-600 text-xl text-white'>
            update 
            <MdUpdate color="white" size={30} />  </button>
            </Link>
           
            <button className='ml-1 flex justify-center items-center bg-red-500 text-white h-10 w-40 rounded-sm shadow-md' onClick={()=>deleteproject(datas.id,index)}>delete <MdDeleteSweep color="white" size={30}/></button>
          </div>
        </div>
      })
    }
   </div>
  
   </div>
     
    </div>
  )
}

export default Project