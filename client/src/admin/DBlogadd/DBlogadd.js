import React, { useState } from 'react'
import "./DBlogadd.css"
import Dnav from './../Dnav/Dnav';
import Api from "../../Api/backurl"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';





const DBlogadd = () => {

    const navgate = useNavigate()

    const [data, setdata] = useState({})
    const [image, setimage] = useState([])

    const blogpost=async(e)=>{
        e.preventDefault();
        try{
            const response= await Api.post("/blogs/blogadd", {...data,image:image},
            {
              headers:{         
                "Content-Type": "multipart/form-data",
                token:JSON.parse(localStorage.getItem("user")).token,
              },
            }
            )
            console.log(response.data)
    
            if(response.data){
              toast.success("sucessfully create post")
              e.target.reset()
              setimage({})
              setdata({})
    
              setTimeout(()=>{          
                navgate("/dashboard/dblog")
              },2000)
            }else{
              toast.error("you are not allow ")
            }
          
    
           
        }catch(err){
          console.log(err)
          toast.error("post not create")
         
        }

    }

  
    
    const hanlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
  return (
    <div>

    <div className="dnav sticky top-0">
        <Dnav/>
      </div>

      <div className="adddblogcontent">
  <ToastContainer />
      <div className="addpostform flex justify-center my-1  items-center ">
        <form action="" className='projectspost rounded-sm shadow-lg ' onSubmit={blogpost} >
          <div className="btitle">
            <input type="text" name='btitle' placeholder=' btitle' className="px-2"  onChange={hanlechange}/>
          </div>

          <div className="blink">
            <input type="text" name='blink' placeholder='blink' className="px-2"  onChange={hanlechange}/>
          </div>

          

          {/* discritppkj */}
          <div className="bdescription">
            <textarea name="bdescription" id="" cols={83}  rows={5} placeholder='write....' className=" px-2" onChange={hanlechange}></textarea>
          </div>


            {/* contents posts */}
            <div className="bdescription">
            <textarea name="bcontent" id="" cols={83}  rows={5} placeholder='write a post from heare ....' className=" px-2" onChange={hanlechange}></textarea>
          </div>

          {/* <div class="bcategories">

          <select name="bcategories" >
          <option value="mern stack">mern stack</option>
          <option value="flutter">flutter</option>
          <option value="node js">node js</option>
          <option value="reacts js">reacts js</option>
          </select>
            

          </div> */}

          <div className="form-floating">
  <select className="form-select bg-gray-500 text-white" id="floatingSelect" aria-label="Floating label select example" name='bcategories' onChange={hanlechange}>
          <option  > select your items</option>
         <option defaultValue="mern stack" name="bcategories">mern stack</option>
          <option defaultValue="flutter" name="bcategories">flutter</option>
          <option defaultValue="node js" name="bcategories">node js</option>
          <option defaultValue="reacts js" name="bcategories">reacts js</option>
  </select>
  <label htmlFor="floatingSelect" className='text-green-500 py-2 text-xl'>categories </label>
</div>

               

              {/* stack  */}
          <div className="form-floating my-2 bg-gray-800">
  <select className="form-select bg-gray-800 text-white  " id="floatingSelect" aria-label="Floating label select example" name='bstack' onChange={hanlechange}>
          <option > select your items</option>
         <option defaultValue="full_Stack" name="bstack">full_Stack</option>
          <option defaultValue="mearn_stack" name="bstack">mearn_stack</option>
          <option defaultValue="back_end" name="bstack">back_end</option>
          <option defaultValue="database" name="bstack">database</option>
          <option defaultValue="mobile_applications" name="bstack">mobile_applications</option>
  </select>
  <label htmlFor="floatingSelect" className='text-red-500 text-xl py-2'>stack</label>
</div>

          <div className="bimage">
            <input type="file"  name='image'  className="bg-red-500" onChange={(e)=>setimage(e.target.files[0])}/>
          </div>
          

          <div className="ppsubmit">
            <input type="submit" value="add blogs"  className="ppsubmit rounded-sm shadow-sm" />
          </div>


        </form>
        </div>
      </div>

    </div>
  )
}

export default DBlogadd


//  btitle
//  bdescription
//  image 
//  blink
//  bcategories


//  bcontent
//  bstack