import React, { useState } from 'react'
import Dnav from '../Dnav/Dnav'
import "./Addproj.css"
import Api from "../../Api/backurl"



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




const Addproj = () => {

  const navgate = useNavigate()


  const [input, setinput] = useState({})
  const [image, setimage] = useState()

  //hanlechange
  const hanlechange=(e)=>{
    console.log("onchange")
    setinput({...input, [e.target.name]:e.target.value})
  }

  //pppost
  const pppost= async(e)=>{
    e.preventDefault();
    try{
        const response= await Api.post("/api/add", {...input,image:image},
        {
          headers:{         
            "Content-Type": "multipart/form-data",
            token:JSON.parse(localStorage.getItem("user")).token,
          },
        }
        )
        console.log(response.data)

        if(response.data.sucess){
          toast.success("sucessfully create post")
          e.target.reset()
          setimage({})
          setinput({})

          setTimeout(()=>{          
            navgate("/dashboard/Project")
          },2000)
        }else{
          toast.error("you are not allow ")
        }
      

       
    }catch(err){
      console.log(err)
      toast.error("post not create")
     
    }

  }

  return (
    <div>
      <div className="dnavcon sticky top-0 ">
    <Dnav />
    </div>

        <div class="addprojectspage mx-1 rounded-sm shadow-lg flex justify-center items-center h-20">
            <h1 className='text-center  p-2 rounded-sm shadow-md text-yellow-50 text-2xl font-bold  mx-1 my-1 bg-[#FCA61F]'>add projects</h1>
        </div>
        <ToastContainer />
        <div class="addpostform flex justify-center my-1  items-center ">
        <form action="" className='projectspost rounded-sm shadow-lg ' onSubmit={pppost} >
          <div className="ptitle">
            <input type="text" name='ptitle' placeholder='title' className="px-2"  onChange={hanlechange}/>
          </div>

          <div className="link">
            <input type="text" name='link' placeholder='link' className="px-2"  onChange={hanlechange}/>
          </div>

          <div className="discriptons">
            <textarea name="discriptons" id="" cols={83}  rows={5} placeholder='write....' className=" px-2" onChange={hanlechange}></textarea>
          </div>

          <div className="image">
            <input type="file"  name='image'  className="bg-red-500" onChange={(e)=>setimage(e.target.files[0])}/>
          </div>


          <div className="ppsubmit">
            <input type="submit" value="submit"  className="ppsubmit rounded-sm shadow-sm" />
          </div>


        </form>
        </div>
    </div>
  )
}

export default Addproj