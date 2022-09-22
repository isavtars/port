import React, { useState } from 'react'
import Dnav from '../Dnav/Dnav'
import "./Updatepp.css"
import Api from "../../Api/backurl"



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams,} from 'react-router-dom';
import { useEffect } from 'react';




const  Updatepp = () => {

  const {id} = useParams();
  const idx= id.toString();
  console.log(id)

  const navgate = useNavigate()


  const [input, setinput] = useState({})
  const [image, setimage] = useState()



  //getthe data by id

  useEffect(() => {
   

    const getusers= async()=>{

      try{
        const response= await Api.get(`/api/getbyid/${id}`,{
          headers:{         
            "Content-Type": "multipart/form-data",
            token:JSON.parse(localStorage.getItem("user")).token,
          },
        });
        console.log(response.data)
        setinput(response.data)
        setimage(response.data)

      }catch(err){
        console.log(err)
      }

    }

    getusers();
  }, [])
  

  //hanlechange
  const hanlechange=(e)=>{
    console.log("onchange")
    setinput({...input, [e.target.name]:e.target.value})
  }
// ppupdate
const ppupdate=async(e)=>{
  e.preventDefault();
    console.log("submit")
    try{

      const response = await Api.patch(`/api/updatepost/${idx}`,{...input, image:image},
      {
         headers:{         
            "Content-Type": "multipart/form-data",
            token:JSON.parse(localStorage.getItem("user")).token,
          },   
      })

      console.log(response.data)

      if(response.data.sucess){
        toast.success("sucessfully create post")
          e.target.reset()
          setimage({})
          setinput({})

          setTimeout(()=>{          
            navgate("/dashboard/Project")
          },2000)
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

        <div class="addprojectspage mx-1 rounded-sm shadow-lg flex justify-center items-center h-20">
            <h1 className='text-center  p-2 rounded-sm shadow-md text-yellow-50 text-2xl font-bold  mx-1 my-1 bg-[#FCA61F]'>update projects</h1>
        </div>
        <ToastContainer />
        <div class="addpostform flex justify-center my-1  items-center ">
        <form action="" className='projectspost rounded-sm shadow-lg ' onSubmit={ppupdate} >
          <div className="ptitle">
            <input type="text" name='ptitle' placeholder='title' className="px-2" value={input.ptitle}  onChange={hanlechange}/>
          </div>

          <div className="link">
            <input type="text" name='link' placeholder='link' className="px-2"  value={input.link} onChange={hanlechange}/>
          </div>

          <div className="discriptons">
            <textarea name="discriptons" id="" cols={83}  rows={5} placeholder='write....' className=" px-2" value={input.discriptons} onChange={hanlechange}></textarea>
          </div>

          <div className="image">
            <input type="file"  name='image'  className="bg-red-500"  onChange={(e)=>setimage(e.target.files[0])}/>
          </div>


          <div className="ppsubmit">
            <input type="submit" value="update"  className="ppsubmit rounded-sm shadow-sm" />
          </div>


        </form>
        </div>
    </div>
  )
}

export default  Updatepp
